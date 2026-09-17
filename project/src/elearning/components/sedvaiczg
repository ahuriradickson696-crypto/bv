interface UniversityLogoProps {
  compact?: boolean;
  light?: boolean;
}

export function UniversityLogo({ compact = false, light = false }: UniversityLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-xl bg-white p-1 shadow-sm flex items-center justify-center shrink-0`}>
        <img src="/images/Capture.PNG" alt="Avance International University crest" className="w-full h-full object-contain" />
      </div>
      {!compact && (
        <div className="text-left">
          <div className={`text-sm font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>Avance International</div>
          <div className={`text-xs leading-tight ${light ? 'text-purple-100' : 'text-slate-500'}`}>University</div>
        </div>
      )}
    </div>
  );
}
