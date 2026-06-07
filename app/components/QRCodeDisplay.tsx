import Image from "next/image";

type QRCodeDisplayProps = {
  qrCodeUrl: string;
  productName: string;
  size?: number;
  showScanText?: boolean;
};

export default function QRCodeDisplay({
  qrCodeUrl,
  productName,
  size = 120,
  showScanText = true,
}: QRCodeDisplayProps) {
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrCodeUrl)}`;

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-slate-100">
      <div className="relative">
        <Image
          src={apiUrl}
          alt={`${productName} QR Code`}
          width={size}
          height={size}
          className="rounded-lg"
          unoptimized
        />
      </div>
      {showScanText && (
        <div className="text-center">
          <p className="text-xs font-medium text-slate-600">Scan to track impressions</p>
          <p className="text-[10px] text-slate-400 mt-0.5">{qrCodeUrl}</p>
        </div>
      )}
    </div>
  );
}