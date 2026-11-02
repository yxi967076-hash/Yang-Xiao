# 在 Windows PowerShell 中重新生成分享卡片，不使用远程字体或第三方工具。
Add-Type -AssemblyName System.Drawing
$shareCanvas = [System.Drawing.Bitmap]::new(1200, 630)
$shareGraphics = [System.Drawing.Graphics]::FromImage($shareCanvas)
$shareDark = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(29,29,31))
$shareMuted = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(99,99,108))
$shareSage = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(92,111,80))
$shareTitle = [System.Drawing.Font]::new('Microsoft YaHei',66,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel)
$shareName = [System.Drawing.Font]::new('Arial',27,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel)
$shareBody = [System.Drawing.Font]::new('Microsoft YaHei',23,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel)
$shareSmall = [System.Drawing.Font]::new('Arial',17,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel)
try {
  $shareGraphics.Clear([System.Drawing.Color]::White)
  $shareGraphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $shareGraphics.DrawString('SHANGHAI JIAO TONG UNIVERSITY',$shareSmall,$shareMuted,78,72)
  $shareGraphics.DrawString('杨潇。',$shareTitle,$shareDark,72,175)
  $shareGraphics.DrawString('YANG XIAO',$shareName,$shareMuted,80,278)
  $shareGraphics.DrawString('本科生个人学术主页',$shareBody,$shareDark,78,367)
  $shareGraphics.DrawString('Brain Health / Artificial Intelligence / Interdisciplinary Research',$shareSmall,$shareSage,80,435)
  $shareGraphics.FillRectangle($shareSage,80,530,56,3)
  $shareGraphics.DrawString('FOUNDATIONS FIRST. CURIOSITY ALWAYS.',$shareSmall,$shareMuted,80,558)
  $shareCanvas.Save((Join-Path $PSScriptRoot '../public/images/academic-share.jpg'),[System.Drawing.Imaging.ImageFormat]::Jpeg)
} finally {
  $shareTitle.Dispose(); $shareName.Dispose(); $shareBody.Dispose(); $shareSmall.Dispose()
  $shareDark.Dispose(); $shareMuted.Dispose(); $shareSage.Dispose()
  $shareGraphics.Dispose(); $shareCanvas.Dispose()
}
