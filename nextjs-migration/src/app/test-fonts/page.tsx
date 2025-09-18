export default function TestFonts() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-heading font-medium">
        This is Poppins font (font-heading) - Heading
      </h1>
      <p className="text-lg font-body">
        This is Nunito font (font-body) - Body text paragraph
      </p>
      <h2 className="text-2xl font-heading font-bold">
        Another Poppins heading (font-heading bold)
      </h2>
      <p className="text-base font-body font-light">
        Another Nunito paragraph (font-body light)
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-heading">CSS Variables Test:</h3>
        <p className="font-body">--font-poppins should be Poppins</p>
        <p className="font-body">--font-nunito should be Nunito</p>
      </div>
    </div>
  );
}