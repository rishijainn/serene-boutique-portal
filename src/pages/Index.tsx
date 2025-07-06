import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Download, Link, Copy } from "lucide-react";
import QRCode from "qrcode";

const Index = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    tableName: "",
    baseUrl: ""
  });
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateQRCode = async () => {
    if (!formData.hotelName || !formData.tableName || !formData.baseUrl) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    
    try {
      const link = `${formData.baseUrl}?hotel=${encodeURIComponent(formData.hotelName)}&table=${encodeURIComponent(formData.tableName)}`;
      setGeneratedLink(link);

      const canvas = canvasRef.current;
      if (canvas) {
        await QRCode.toCanvas(canvas, link, {
          width: 256,
          margin: 2,
          color: {
            dark: '#1e293b',
            light: '#ffffff'
          }
        });
        
        const dataUrl = canvas.toDataURL();
        setQrCodeUrl(dataUrl);
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Failed to generate QR code");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = `qr-${formData.hotelName}-${formData.tableName}.png`;
      link.href = qrCodeUrl;
      link.click();
    }
  };

  const copyLink = async () => {
    if (generatedLink) {
      try {
        await navigator.clipboard.writeText(generatedLink);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy link:", error);
      }
    }
  };

  const previewLink = formData.hotelName && formData.tableName && formData.baseUrl 
    ? `${formData.baseUrl}?hotel=${encodeURIComponent(formData.hotelName)}&table=${encodeURIComponent(formData.tableName)}`
    : "";

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">QR Code Generator</h1>
          <p className="text-muted-foreground">Generate QR codes for hotel/restaurant tables</p>
        </div>

        {/* Form Card */}
        <Card className="shadow-medium mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Table Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hotelName" className="text-sm font-medium text-foreground mb-2 block">
                Hotel/Restaurant Name *
              </Label>
              <Input
                id="hotelName"
                name="hotelName"
                type="text"
                placeholder="e.g., Grand Vista Hotel"
                value={formData.hotelName}
                onChange={handleInputChange}
                className="transition-smooth"
              />
            </div>

            <div>
              <Label htmlFor="tableName" className="text-sm font-medium text-foreground mb-2 block">
                Table Name/Number *
              </Label>
              <Input
                id="tableName"
                name="tableName"
                type="text"
                placeholder="e.g., Table 5, VIP-A, Balcony-3"
                value={formData.tableName}
                onChange={handleInputChange}
                className="transition-smooth"
              />
            </div>

            <div>
              <Label htmlFor="baseUrl" className="text-sm font-medium text-foreground mb-2 block">
                Base URL *
              </Label>
              <Input
                id="baseUrl"
                name="baseUrl"
                type="url"
                placeholder="https://your-app.com/menu"
                value={formData.baseUrl}
                onChange={handleInputChange}
                className="transition-smooth"
              />
            </div>

            {/* Preview Link */}
            {previewLink && (
              <div className="p-3 bg-muted rounded-md">
                <div className="text-xs text-muted-foreground mb-1">Preview Link:</div>
                <div className="text-sm font-mono text-primary break-all">{previewLink}</div>
              </div>
            )}

            <Button 
              onClick={generateQRCode}
              disabled={isLoading || !formData.hotelName || !formData.tableName || !formData.baseUrl}
              className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              {isLoading ? "Generating..." : "Generate QR Code"}
            </Button>
          </CardContent>
        </Card>

        {/* QR Code Result */}
        {qrCodeUrl && (
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                Generated QR Code
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">
                <canvas 
                  ref={canvasRef}
                  className="border border-border rounded-lg shadow-soft"
                />
              </div>
              
              <div className="p-3 bg-muted rounded-md text-left">
                <div className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <Link className="w-3 h-3" />
                  Generated Link:
                </div>
                <div className="text-sm font-mono text-primary break-all">{generatedLink}</div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={downloadQRCode}
                  variant="outline"
                  className="flex-1"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  onClick={copyLink}
                  variant="outline"
                  className="flex-1"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground mt-8">
          <p>Built for developers • Clean & Simple</p>
        </div>
      </div>
    </div>
  );
};

export default Index;