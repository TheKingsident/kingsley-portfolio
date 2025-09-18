export default function FontDebug() {
  return (
    <div className="p-8 space-y-6">
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">Font Debug Information</h2>
        
        <div className="space-y-2">
          <p><strong>CSS Variables:</strong></p>
          <p>--font-poppins: <span style={{fontFamily: 'var(--font-poppins)'}}>This should be Poppins</span></p>
          <p>--font-nunito: <span style={{fontFamily: 'var(--font-nunito)'}}>This should be Nunito</span></p>
        </div>
        
        <div className="mt-4 space-y-2">
          <p><strong>Direct Font Family:</strong></p>
          <p style={{fontFamily: 'Poppins, sans-serif'}}>Direct Poppins import</p>
          <p style={{fontFamily: 'Nunito, sans-serif'}}>Direct Nunito import</p>
        </div>
        
        <div className="mt-4 space-y-2">
          <p><strong>Tailwind Classes:</strong></p>
          <p className="font-heading">This uses font-heading class</p>
          <p className="font-body">This uses font-body class</p>
        </div>
        
        <div className="mt-4 space-y-2">
          <p><strong>Default Fonts:</strong></p>
          <p className="font-sans">This uses font-sans (should be Nunito)</p>
          <p>This uses no font class (system default)</p>
        </div>
      </div>
    </div>
  );
}