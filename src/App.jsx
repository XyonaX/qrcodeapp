import { useState } from 'react';
import './App.css';
import { BasicInput } from './ui/BasicInput';
import QRCode from 'qrcode';
import { LiveQrCode } from './components/LiveQrCode';

function App() {
  const [qrText, setQrText] = useState('');
  const [qrCode, setqrCode] = useState('');

  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 900,
        margin: 3,
      },
      (err, url) => {
        if (err) return console.log(err);
        setqrCode(url);
      }
    );
  };

  const handleQrCode = (e) => {
    setQrText(e.target.value);
    generateQrCode();
  };

  return (
    <div className="App">
      <LiveQrCode value={qrText} />
      <BasicInput
        label="qrcode text"
        type="text"
        onChange={handleQrCode}
        style={{ marginTop: 20 }}
      />
      <br />
      <a href={qrCode} download={`${qrText}.png`}>
        Download
      </a>
    </div>
  );
}

export default App;
