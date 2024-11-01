import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BarChar from "@/public/svg/BarChar";
import Command from "@/public/svg/Command";
import Message from "@/public/svg/Message";
import Mail from "@/public/svg/Mail";
import Smile from "@/public/svg/Smile";
import Zap from "@/public/svg/Zap";

const Productivity: React.FC = () => {
  return (
    <>
      <section className="container flex flex-col gap-10 items-center lg:!flex-row lg:gap-0 lg:mx-auto md:py-[72px] py-14 relative">
        <div className="box-c lg:pl-0 lg:pr-12 lg:w-1/2 mx-auto px-6 relative self-stretch shrink top-0 xl:pr-20">
          <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
            <div className="flex flex-col gap-3 self-start items-start">
              <div className="flex justify-center items-center bg-[#1FDD8A]/10 rounded-[20px] ">
                <p className="text-dark-text-tertiary opacity-50 p-2">
                Innovación
                </p>
              </div>
              <div className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start">
                <h4
                  className="text-pretty text-3xl font-medium md:text-4xl text-left"
                  title="Supercharge Team Productivity"
                >
                  Potenciamos el futuro con soluciones digitales de última generación
                </h4>
              </div>
              <p className="max-w-screen-md !text-base text-pretty font-light text-text-tertiary dark:text-dark-text-tertiary md:text-xl text-left">
              Aprovechamos el poder de la inteligencia artificial para crear soluciones digitales de última generación, impulsando eficiencia y crecimiento en cada proyecto. Con tecnología avanzada y un enfoque personalizado, te ayudamos a enfrentar los desafíos del futuro, hoy.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full box-b flex-1 shrink-0 lg:w-1/2 lg:flex-1">
          <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg  bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Mail width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Desarrollo de Software a Medida
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Creación de aplicaciones web y móviles personalizadas según las necesidades específicas de cada cliente.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Zap width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Inteligencia Artificial y Machine Learning
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Soluciones de IA para análisis de datos, automatización de procesos y mejora de la experiencia de usuario a través de recomendaciones y predicciones.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <BarChar width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Desarrollo de APIs e Integración de Servicios Cloud
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Conexión de sistemas y datos mediante APIs, y migración a la nube para optimizar recursos (AWS, Azure, Google Cloud).
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Smile width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Automatización de Procesos (RPA)
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Implementación de robots de software para automatizar tareas repetitivas, mejorando la eficiencia operativa de las empresas.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Command width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Transformación Digital y Modernización de TI
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Asesoría para adaptar los sistemas de las empresas a entornos digitales y mejorar su infraestructura tecnológica.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Message width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Consultoría en Experiencia del Usuario (UX/UI)
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Diseño de interfaces y flujos de usuario intuitivos para aplicaciones que generen una experiencia positiva.
                  </p>
                </CardContent>
              </Card>
            </article>
            <article className="flex w-[300px] shrink-0 gap-4 rounded-lg bg-surface-secondary p-4 dark:border-dark-border dark:bg-dark-surface-secondary lg:w-full lg:flex-row lg:p-5">
              <Card className="flex">
                <CardHeader className="flex-row align-center gap-3">
                  <Message width={40} height={40} fill="white" />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className=" mb-3">
                  Desarrollo y Optimización de E-commerce
                  </CardTitle>
                  <p className="!text-base opacity-50">
                  Creación y optimización de plataformas de comercio electrónico, incluyendo personalización de la experiencia de usuario y funciones de venta avanzadas.
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productivity;
