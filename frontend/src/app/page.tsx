import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-poppins">
      {/* Sección de bienvenida */}
      <section id="inicio" className="flex-grow py-20 bg-purple-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Bienvenidos a Peluquería Gisela</h2>
          <p className="text-xl mb-8">Donde la belleza se encuentra con la experiencia</p>
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Gisela Echavarria"
            width={300}
            height={300}
            className="rounded-full mx-auto shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
