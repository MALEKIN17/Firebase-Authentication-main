import NavbarHome from "../components/NavbarHome";

export default function informacion() {
  return (
    <>
      <NavbarHome />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://etech.com.ni/wp-content/uploads/2023/03/Administracion-480x400.png"
              alt="Placeholder Image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Contactanos
            </div>
            <p className="mt-2 text-blue-500">
              <a href="https://mail.google.com/mail/u/4/#inbox">
                camilosantana486@gmail.com
              </a>{" "}
              <hr />
            </p>
            avisamos si tienes alguna duda o sugerencia
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 md:w-48"
              src="https://iconape.com/wp-content/files/yr/191170/png/universidad-popular-del-cesar-logo.png"
              alt="Placeholder Image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              ENTIDAD DE ESTUDIO SUPERIOR
            </div>
            <p className="mt-2 text-blue-500">
              <a href="https://www.unicesar.edu.co/">Visitanos</a>
            </p>
          </div>
        </div>
      </div>

      <footer className="text-gray-600 body-font fixed bottom-0 w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Mi Aplicación —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @GEMINIS
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
