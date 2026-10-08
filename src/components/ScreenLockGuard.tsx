import React, { useEffect, useState, useRef } from 'react';
import {
  Lock,
  ShieldAlert,
  Unlock,
  RotateCcw,
  AlertTriangle,
  EyeOff,
} from 'lucide-react';
import { GameSession } from '../types/game';
import { sounds } from '../utils/audio';

interface Props {
  isActiveAdventure: boolean;
  isScannerOpen: boolean;
  session: GameSession | null;
  currentPosCode?: string;
  onLockTriggered: (reason: string) => void;
  onUnlockByTeacher: (code: string) => Promise<{ success: boolean; message: string }>;
  onResetByTeacher: (code: string) => Promise<{ success: boolean; message: string }>;
}

export const ScreenLockGuard: React.FC<Props> = ({
  isActiveAdventure,
  isScannerOpen,
  session,
  currentPosCode,
  onLockTriggered,
  onUnlockByTeacher,
  onResetByTeacher,
}) => {
  // Teacher code input on the locked screen
  const [teacherCode, setTeacherCode] = useState('');
  const [feedback, setFeedback] = useState<{
    type: 'error' | 'success';
    message: string;
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Flag to suppress lock when Teacher explicitly unlocks or when QR scanner opens
  const suppressLockRef = useRef(false);

  // Auto-ignore any locks caused by exiting fullscreen, leaving app, tab switch, or back button
  const isIgnoredLockReason =
    !!session?.screenLocked &&
    /layar penuh|fullscreen|keluar|pindah|tab|minimize|balik|back|buka|hidden/i.test(
      session?.screenLockReason || ''
    );

  const isLocked = !!session?.screenLocked && !isIgnoredLockReason;
  const isFailedOrTimeout = session?.status === 'failed' || session?.status === 'timeout';

  // Keep Screen WakeLock active during adventure so phone screen doesn't sleep
  useEffect(() => {
    if (!isActiveAdventure) return;
    let wakeLock: any = null;

    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator) {
          wakeLock = await (navigator as any).wakeLock.request('screen');
        }
      } catch {
        // ignore if unsupported
      }
    };

    requestWakeLock();

    return () => {
      if (wakeLock) {
        try {
          wakeLock.release();
        } catch {
          // ignore
        }
      }
    };
  }, [isActiveAdventure]);

  // Block Copy, Cut, ContextMenu (Long-press search on mobile Chrome/Safari) & DevTools shortcuts
  useEffect(() => {
    if (!isActiveAdventure) return;

    const preventCopyAction = (e: Event) => {
      const target = e.target as HTMLElement | null;
      // Allow typing inside input/textarea if needed, but block copying question/article text
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'x', 'u', 's', 'p', 'f', 'g', 't', 'n', 'w'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12' || e.key === 'Escape') {
        e.preventDefault();
      }
    };

    document.addEventListener('copy', preventCopyAction);
    document.addEventListener('cut', preventCopyAction);
    document.addEventListener('contextmenu', preventCopyAction);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('copy', preventCopyAction);
      document.removeEventListener('cut', preventCopyAction);
      document.removeEventListener('contextmenu', preventCopyAction);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActiveAdventure]);

  // Handle Teacher Unlock Submit
  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherCode.trim()) {
      sounds.playWrong();
      setFeedback({
        type: 'error',
        message: 'Harap masukkan Kode / PIN Guru terlebih dahulu!',
      });
      return;
    }

    setIsProcessing(true);
    setFeedback(null);

    suppressLockRef.current = true;
    const res = await onUnlockByTeacher(teacherCode);
    setIsProcessing(false);

    if (res.success) {
      sounds.playSuccess();
      setTeacherCode('');
      setFeedback(null);
      setTimeout(() => {
        suppressLockRef.current = false;
      }, 500);
    } else {
      suppressLockRef.current = false;
      sounds.playWrong();
      setFeedback({
        type: 'error',
        message: res.message,
      });
    }
  };

  // Handle Teacher Full Reset Submit (Code "ulangi")
  const handleResetFromStart = async () => {
    if (!teacherCode.trim()) {
      sounds.playWrong();
      setFeedback({
        type: 'error',
        message: 'Masukkan kode "ulangi" pada kolom di atas untuk mereset aplikasi dari awal.',
      });
      return;
    }

    setIsProcessing(true);
    setFeedback(null);
    suppressLockRef.current = true;
    const res = await onResetByTeacher(teacherCode);
    setIsProcessing(false);

    if (res.success) {
      sounds.playSuccess();
      setTeacherCode('');
      setFeedback({
        type: 'success',
        message: res.message,
      });
      setTimeout(() => {
        suppressLockRef.current = false;
      }, 500);
    } else {
      suppressLockRef.current = false;
      sounds.playWrong();
      setFeedback({
        type: 'error',
        message: res.message,
      });
    }
  };

  // ============================================================================
  // 1. JIKA LAYAR TERKUNCI KARENA SISWA KELUAR APLIKASI / BUKA BROWSER
  // ============================================================================
  if (isLocked && session) {
    return (
      <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto select-none animate-in fade-in duration-200">
        <div className="max-w-md w-full bg-white rounded-3xl border-4 border-rose-600 shadow-2xl overflow-hidden my-auto">
          {/* Top Warning Header */}
          <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-red-800 text-white p-5 text-center relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 border-2 border-white/30 flex items-center justify-center mb-3 shadow-lg animate-bounce">
              <ShieldAlert className="w-9 h-9 text-yellow-300" />
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-yellow-400 text-rose-950 text-[10px] font-black uppercase tracking-widest mb-1.5">
              <EyeOff className="w-3 h-3" /> SISTEM ANTI-CURANG AKTIF
            </span>
            <h2 className="text-xl sm:text-2xl font-black font-display tracking-wide uppercase leading-tight">
              TAMPILAN LAYAR TERKUNCI!
            </h2>
            <p className="text-xs text-rose-100 font-semibold mt-1">
              Hanya Bapak/Ibu Guru yang dapat membuka kuncian tampilan ini
            </p>
          </div>

          {/* Lock Details & Teacher Unlock Form */}
          <div className="p-5 sm:p-6 space-y-4">
            {/* Group & Violation Info */}
            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-3.5 space-y-2 text-xs">
              <div className="flex items-center justify-between font-black text-rose-950 border-b border-rose-200 pb-2">
                <span>
                  👥 {session.player.playerName} ({session.player.className})
                </span>
                <span className="px-2 py-0.5 bg-rose-600 text-white rounded-full text-[10px]">
                  {currentPosCode || `POS ${session.currentPosIndex + 1}`}
                </span>
              </div>

              <div className="flex items-start gap-2 text-rose-900 font-bold leading-relaxed pt-0.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  {session.screenLockReason ||
                    'Terdeteksi keluar dari tampilan aplikasi atau membuka browser saat sedang mengerjakan soal pos.'}
                </span>
              </div>

              {session.screenLockCount && session.screenLockCount > 0 && (
                <div className="text-[11px] font-extrabold text-rose-700 bg-rose-100/80 px-2.5 py-1 rounded-lg inline-block">
                  Jumlah Peringatan Terdeteksi: {session.screenLockCount}x
                </div>
              )}
            </div>

            <p className="text-xs text-slate-600 text-center font-medium leading-relaxed">
              Siswa <strong>tidak diperbolehkan</strong> membuka tab browser, mencari jawaban di internet, atau keluar dari layar aplikasi. Silakan panggil <strong>Bapak/Ibu Guru</strong> untuk memeriksa dan membuka kunci layar.
            </p>

            {/* Teacher Only Unlock Input */}
            <form onSubmit={handleUnlockSubmit} className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-amber-950 font-black text-xs uppercase tracking-wider">
                <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Otorisasi Buka Kunci (Khusus Guru)</span>
              </div>

              <input
                type="password"
                value={teacherCode}
                onChange={(e) => {
                  setTeacherCode(e.target.value);
                  setFeedback(null);
                }}
                placeholder="Masukkan Kode / PIN Guru..."
                className="w-full p-3.5 text-center text-base font-black tracking-widest bg-white border-2 border-amber-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 text-slate-900"
              />

              {feedback && (
                <div
                  className={`p-2.5 rounded-xl text-xs font-bold text-center ${
                    feedback.type === 'success'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                >
                  <Unlock className="w-4 h-4 shrink-0" />
                  <span>Buka Kuncian Tampilan</span>
                </button>

                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleResetFromStart}
                  className="w-full py-3 px-3 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>Reset Aplikasi (Ulangi)</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
