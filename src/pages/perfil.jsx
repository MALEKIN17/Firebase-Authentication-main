import NavbarHome from "../components/NavbarHome";

export default function Perfil() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavbarHome />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Perfil</h1>
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-full w-40 h-40 flex justify-center items-center">
            <img
              src="https://th.bing.com/th/id/R.8e63f2dfc44e19ab8cf81d33c95352f1?rik=2fa4X%2f6ZIE7djg&pid=ImgRaw&r=0"
              alt="Profile"
              className="w-20 h-full rounded-full object-cover"
              style={{ border: "2px solid #000" }}
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">USUARIO</h2>
          <p className="text-gray-500">Correo electrónico</p>
        </div>
        {/* Aquí puedes agregar más contenido de perfil */}
      </div>
    </div>
  );
}
