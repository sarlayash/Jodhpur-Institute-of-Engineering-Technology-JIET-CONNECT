import { Badge, UserProfile } from '../types';
import { getVerificationUrl } from './qrHelper';
import QRCode from 'qrcode';

/**
 * Exports the Certificate as a crisp high-resolution 2400x1500 PNG
 * Cleaned of Deans - POWERED BY KAPIL ONLY with bulletproof Mobile QR Code.
 */
export async function downloadCertificateAsPng(
  userProfile: UserProfile,
  credentialId: string
): Promise<void> {
  const canvas = document.createElement('canvas');
  const width = 2400;
  const height = 1500;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Generate verified mobile-proof QR Code data URL
  const mobileVerifiedUrl = getVerificationUrl(credentialId);
  const qrDataUrl = await QRCode.toDataURL(mobileVerifiedUrl, {
    width: 240,
    margin: 1,
    color: { dark: '#09090b', light: '#ffffff' }
  });

  // 1. Deep Obsidian Gradient Background
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#09090b');
  bgGrad.addColorStop(0.5, '#0d0d12');
  bgGrad.addColorStop(1, '#050507');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Ornate Double Gold Outer Border
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 14;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 4;
  ctx.strokeRect(60, 60, width - 120, height - 120);

  // Inner hairline
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(80, 80, width - 160, height - 160);

  // 3. Corner Decorative Brackets
  drawCornerAccents(ctx, 95, 95, 60);
  drawCornerAccents(ctx, width - 95, 95, 60, true, false);
  drawCornerAccents(ctx, 95, height - 95, 60, false, true);
  drawCornerAccents(ctx, width - 95, height - 95, 60, true, true);

  // 4. Gold Circular Insignia Emblem
  const centerX = width / 2;
  const emblemY = 220;
  const emblemGrad = ctx.createLinearGradient(centerX - 50, emblemY - 50, centerX + 50, emblemY + 50);
  emblemGrad.addColorStop(0, '#fde68a');
  emblemGrad.addColorStop(0.5, '#f59e0b');
  emblemGrad.addColorStop(1, '#b45309');

  ctx.fillStyle = emblemGrad;
  ctx.beginPath();
  ctx.arc(centerX, emblemY, 55, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#000000';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('J', centerX, emblemY);

  // 5. Institution Titles
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 28px sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('JODHPUR INSTITUTE OF ENGINEERING AND TECHNOLOGY', centerX, 330);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 64px Georgia, serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('CERTIFICATE OF EXCELLENCE', centerX, 420);

  ctx.fillStyle = '#d4d4d8';
  ctx.font = '600 24px sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('IN COMPREHENSIVE CODING & ALGORITHMIC ARCHITECTURE', centerX, 480);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 24px sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('POWERED BY KAPIL ONLY', centerX, 530);

  // 6. Recipient Introduction
  ctx.fillStyle = '#a1a1aa';
  ctx.font = 'italic 26px Georgia, serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('This is to officially certify that', centerX, 615);

  // 7. Student Name in Radiant Gold
  const name = userProfile.name || 'Honorable Student';
  const nameGrad = ctx.createLinearGradient(centerX - 300, 0, centerX + 300, 0);
  nameGrad.addColorStop(0, '#fef08a');
  nameGrad.addColorStop(0.5, '#f59e0b');
  nameGrad.addColorStop(1, '#fde047');

  ctx.fillStyle = nameGrad;
  ctx.font = 'bold 72px Georgia, serif';
  ctx.letterSpacing = '2px';
  ctx.fillText(name, centerX, 705);

  // Underline beneath name
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX - 350, 740);
  ctx.lineTo(centerX + 350, 740);
  ctx.stroke();

  // 8. Academic Meta (Roll & Branch)
  ctx.fillStyle = '#e4e4e7';
  ctx.font = '24px sans-serif';
  ctx.letterSpacing = '1px';
  const metaText = `Roll No: ${userProfile.rollNo || 'JIET-2026-REG'}  ·  Department of ${userProfile.branch || 'Computer Science & Engineering'}`;
  ctx.fillText(metaText, centerX, 795);

  // 9. Citation paragraph
  ctx.fillStyle = '#a1a1aa';
  ctx.font = '22px sans-serif';
  ctx.letterSpacing = '0.5px';
  const p1 = 'has demonstrated outstanding algorithmic competence by analyzing, testing, compiling, and solving rigorous';
  const p2 = 'algorithmic engineering problems across C, C++, Java, and Python, mastering time-space complexity optimization.';
  ctx.fillText(p1, centerX, 865);
  ctx.fillText(p2, centerX, 905);

  // 10. QR Code Image (Mobile-Ready)
  if (qrDataUrl) {
    const qrImg = new Image();
    await new Promise((resolve) => {
      qrImg.onload = resolve;
      qrImg.src = qrDataUrl;
    });

    const qrSize = 175;
    const qrX = centerX - qrSize / 2;
    const qrY = 1030;

    // Gold frame around QR
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);

    ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 16px monospace';
    ctx.letterSpacing = '1px';
    ctx.fillText('SCAN ON ANY PHONE TO VERIFY', centerX, qrY + qrSize + 34);
  }

  // 11. Sole Faculty Signature: Kapil Narula (POWERED BY KAPIL ONLY)
  const sigLeftX = 400;
  const sigY = 1140;

  ctx.fillStyle = '#fde68a';
  ctx.font = 'italic bold 40px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('Kapil Narula', sigLeftX, sigY);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sigLeftX - 160, sigY + 15);
  ctx.lineTo(sigLeftX + 160, sigY + 15);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('KAPIL NARULA', sigLeftX, sigY + 46);

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('Lead Faculty & Platform Architect', sigLeftX, sigY + 75);

  ctx.fillStyle = '#a1a1aa';
  ctx.font = '16px sans-serif';
  ctx.fillText('POWERED BY KAPIL ONLY', sigLeftX, sigY + 100);

  // 12. Right Side: Official Verification Authority Seal (No Deans)
  const sigRightX = width - 400;

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 22px sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('AUTHENTICATED CREDENTIAL', sigRightX, sigY);

  ctx.strokeStyle = '#52525b';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(sigRightX - 160, sigY + 15);
  ctx.lineTo(sigRightX + 160, sigY + 15);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px monospace';
  ctx.fillText(`ID: ${credentialId}`, sigRightX, sigY + 46);

  ctx.fillStyle = '#d4d4d8';
  ctx.font = '16px sans-serif';
  ctx.fillText('JIET CONNECT REPOSITORY', sigRightX, sigY + 75);

  ctx.fillStyle = '#71717a';
  ctx.font = '15px sans-serif';
  const issueDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  ctx.fillText(`Validated: ${issueDate}`, sigRightX, sigY + 100);

  // Trigger browser download
  const cleanName = (userProfile.name || 'Candidate').replace(/[^a-zA-Z0-9]/g, '_');
  triggerCanvasDownload(canvas, `${cleanName}_JIET_Certificate_PoweredByKapil.png`);
}

/**
 * Exports an individual Badge as a rich 1200x1200 PNG badge medal (POWERED BY KAPIL ONLY)
 */
export async function downloadBadgeAsPng(badge: Badge, userProfile: UserProfile): Promise<void> {
  const canvas = document.createElement('canvas');
  const size = 1200;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const center = size / 2;

  // Background Dark Obsidian
  ctx.fillStyle = '#070709';
  ctx.fillRect(0, 0, size, size);

  // Outer Gold Sunburst / Star Ring
  ctx.save();
  ctx.translate(center, center);
  const rays = 24;
  for (let i = 0; i < rays; i++) {
    ctx.rotate((Math.PI * 2) / rays);
    ctx.fillStyle = i % 2 === 0 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(251, 191, 36, 0.08)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-30, 480);
    ctx.lineTo(30, 480);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Outer Metallic Gold Rim
  const rimGrad = ctx.createLinearGradient(center - 400, center - 400, center + 400, center + 400);
  rimGrad.addColorStop(0, '#fef08a');
  rimGrad.addColorStop(0.3, '#f59e0b');
  rimGrad.addColorStop(0.7, '#d97706');
  rimGrad.addColorStop(1, '#b45309');

  ctx.strokeStyle = rimGrad;
  ctx.lineWidth = 28;
  ctx.beginPath();
  ctx.arc(center, center, 440, 0, Math.PI * 2);
  ctx.stroke();

  // Inner Beaded Ring
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(center, center, 410, 0, Math.PI * 2);
  ctx.stroke();

  // Dark Inner Plate
  const plateGrad = ctx.createRadialGradient(center, center, 50, center, center, 400);
  plateGrad.addColorStop(0, '#1c1917');
  plateGrad.addColorStop(1, '#09090b');
  ctx.fillStyle = plateGrad;
  ctx.beginPath();
  ctx.arc(center, center, 400, 0, Math.PI * 2);
  ctx.fill();

  // Central Gold Star / Trophy Icon
  ctx.fillStyle = '#f59e0b';
  ctx.font = 'bold 120px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★', center, center - 160);

  // Institution Header
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 22px sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('JIET CONNECT · VERIFIED BADGE', center, center - 60);

  // Badge Title in Bold Gold
  const titleGrad = ctx.createLinearGradient(center - 200, 0, center + 200, 0);
  titleGrad.addColorStop(0, '#fef08a');
  titleGrad.addColorStop(1, '#f59e0b');
  ctx.fillStyle = titleGrad;
  ctx.font = 'bold 46px Georgia, serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(badge.title, center, center + 10);

  // Recipient Learner Name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(userProfile.name || 'Honorable Student', center, center + 80);

  // Requirement description
  ctx.fillStyle = '#a1a1aa';
  ctx.font = '20px sans-serif';
  ctx.fillText(badge.requirement, center, center + 130);

  // Kapil Faculty Signature Seal (POWERED BY KAPIL ONLY)
  ctx.fillStyle = '#fde68a';
  ctx.font = 'italic bold 32px Georgia, serif';
  ctx.fillText('Kapil Narula', center, center + 225);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(center - 130, center + 245);
  ctx.lineTo(center + 130, center + 245);
  ctx.stroke();

  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 20px sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText('POWERED BY KAPIL ONLY', center, center + 275);

  const cleanTitle = badge.title.replace(/[^a-zA-Z0-9]/g, '_');
  triggerCanvasDownload(canvas, `${cleanTitle}_Badge_PoweredByKapil.png`);
}

function drawCornerAccents(ctx: CanvasRenderingContext2D, x: number, y: number, length: number, flipX = false, flipY = false) {
  const dirX = flipX ? -1 : 1;
  const dirY = flipY ? -1 : 1;

  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x, y + length * dirY);
  ctx.lineTo(x, y);
  ctx.lineTo(x + length * dirX, y);
  ctx.stroke();
}

function triggerCanvasDownload(canvas: HTMLCanvasElement, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
