"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Play, Shield, Users, MessageCircle, Star, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FiveMNarcoRP() {
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [copyNotification, setCopyNotification] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    // Preload audio
    const audio = new Audio("/placeholder.mp3")
    audio.loop = true
    audio.volume = 0.2

    if (audioEnabled) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
    }
  }, [audioEnabled])

  const connectToServer = async () => {
    try {
      await navigator.clipboard.writeText("Connect cfx.re/join/rj4qex")
      setCopyNotification(true)
      setTimeout(() => setCopyNotification(false), 3000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = "Connect cfx.re/join/rj4qex"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopyNotification(true)
      setTimeout(() => setCopyNotification(false), 3000)
    }
  }

  const joinDiscord = () => {
    window.open("https://discord.gg/Z3Q24XWvgD", "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Copy Notification */}
      {copyNotification && (
        <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="font-bold">¡Copiado!</p>
          <p className="text-sm">Pégalo en F8 de FiveM</p>
        </div>
      )}

      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/qLay1g9VglI?autoplay=1&mute=1&loop=1&playlist=qLay1g9VglI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            pointerEvents: "none",
            transform: "scale(1.1)", // Slightly scale to avoid black borders
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between py-4">
            {/* Logo y nombre a la izquierda */}
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Devil RP Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-red-500">𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ.</span>
            </div>

            {/* Menú absolutamente centrado */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#inicio" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  Inicio
                </a>
                <a href="#servidor" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  Servidor
                </a>
                <a href="#normas" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  Normas
                </a>
                <a href="#contacto" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                  Contacto
                </a>
              </div>
            </div>

            {/* Espacio vacío a la derecha para balancear */}
            <div className="w-12 h-12"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <div className="relative inline-block mb-8">
              <motion.img
                src="/logo.png"
                alt="Devil RP Logo"
                className="w-32 h-32 mx-auto mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 mb-6 font-mono uppercase tracking-wider">
                𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ.
              </h1>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-200">
              La experiencia de roleplay mexicano más auténtica y profesional
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              En Coahuila respetamos la tradición, los valores y el trabajo honesto. Aquí cada persona se gana su lugar
              con dedicación y respeto. ¿Tienes lo necesario para formar parte de nuestra comunidad?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={connectToServer}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 text-lg border-2 border-red-600 hover:border-red-500 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              CONECTAR AL SERVIDOR
            </Button>
            <Button
              onClick={joinDiscord}
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-900/50 font-bold py-4 px-8 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              COMUNIDAD DISCORD
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">30+</div>
              <div className="text-sm text-gray-400">Jugadores Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Servidor Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">99%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="servidor" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 font-mono uppercase tracking-widest">
              NUESTRO SERVIDOR
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              El servidor de roleplay mexicano más profesional y auténtico
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/60 border-red-900/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-6">Roleplay Mexicano Auténtico</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Ofrecemos una experiencia de roleplay seria y profesional con ambiente 100% mexicano. Contamos con
                    trabajos legales e ilegales, organizaciones establecidas y una economía realista. Desde empleos
                    básicos hasta posiciones de liderazgo, todos inician desde abajo y progresan con esfuerzo.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center text-red-400">
                      <Shield className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm">Policías y Militares Activos</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <Users className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm">Organizaciones Criminales</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <Star className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm">Economía Realista</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <Award className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="text-sm">Staff Mexicano</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg border-2 border-red-900/50">
                <img src="/roleplay-scene.jpeg" alt="Roleplay Scene" className="w-full h-96 object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Disponibilidad 24/7",
                description:
                  "Nuestro servidor permanece activo las 24 horas. Siempre encontrarás jugadores comprometidos con el roleplay de calidad.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Comunidad Comprometida",
                description:
                  "Más de 30 jugadores activos diariamente, participando en eventos organizados, actividades comerciales y conflictos estructurados.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/60 border-red-900/50 hover:border-red-600/70 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-red-500 mb-6 flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="normas" className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-red-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 font-mono uppercase tracking-widest">
              NORMAS DEL SERVIDOR
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reglas claras y justas para mantener una experiencia de roleplay de calidad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "RESPETO AL ROLEPLAY",
                description:
                  "Mantenemos estándares altos de interpretación. Se requiere seriedad y compromiso con el personaje.",
                number: "01",
              },
              {
                title: "AMBIENTE RESPETUOSO",
                description:
                  "Tratamos a todos los miembros con respeto, tanto en el servidor como en Discord. Cero tolerancia a la toxicidad.",
                number: "02",
              },
              {
                title: "PROHIBIDO METAGAMING",
                description:
                  "La información externa no debe influir en las decisiones del personaje. Mantén la inmersión del roleplay.",
                number: "03",
              },
              {
                title: "CONFLICTOS JUSTIFICADOS",
                description:
                  "Toda confrontación debe tener trasfondo y desarrollo narrativo. No se permiten acciones sin motivo.",
                number: "04",
              },
              {
                title: "COMUNICACIÓN INTERNA",
                description:
                  "Utiliza los sistemas de comunicación del juego para interactuar con tu organización durante el roleplay.",
                number: "05",
              },
              {
                title: "IDENTIDAD MEXICANA",
                description:
                  "Respetamos y promovemos la cultura mexicana auténtica. El roleplay debe reflejar nuestras tradiciones.",
                number: "06",
              },
            ].map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/60 border-red-900/50 hover:border-red-600/70 transition-all duration-300 h-full relative overflow-hidden">
                  <CardContent className="p-8">
                    <div className="absolute top-4 right-4 text-6xl font-black text-red-900/20 font-mono">
                      {rule.number}
                    </div>
                    <h3 className="text-lg font-bold text-red-400 mb-4 relative z-10">{rule.title}</h3>
                    <p className="text-gray-300 leading-relaxed relative z-10">{rule.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-6 font-mono uppercase tracking-widest">
              ÚNETE A NOSOTROS
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ¿Estás preparado para la mejor experiencia de roleplay mexicano?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Card className="bg-black/60 border-red-900/50 hover:border-red-600/70 transition-all duration-300 max-w-md">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-red-400 mb-3">Discord Oficial</h3>
                <p className="text-gray-300 mb-6">Nuestra comunidad oficial te espera</p>
                <Button
                  onClick={joinDiscord}
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900/50 bg-transparent w-full"
                >
                  Unirse al Discord
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/90 border-t border-red-900/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="Devil RP Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-red-500">𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                El servidor de roleplay mexicano más profesional y auténtico. Aquí la comunidad se compromete con
                experiencias de calidad y respeto mutuo. ¿Te unes a nosotros?
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <a href="#inicio" className="block text-gray-400 hover:text-red-400 transition-colors">
                  Inicio
                </a>
                <a href="#servidor" className="block text-gray-400 hover:text-red-400 transition-colors">
                  Servidor
                </a>
                <a href="#normas" className="block text-gray-400 hover:text-red-400 transition-colors">
                  Normas
                </a>
                <a href="#contacto" className="block text-gray-400 hover:text-red-400 transition-colors">
                  Contacto
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">Información</h4>
              <div className="space-y-2 text-gray-400">
                <p>Jugadores Activos: 30+ miembros</p>
                <p>Disponibilidad: 99.9%</p>
                <p>Soporte: 24/7</p>
                <p>Actualizaciones: Constantes</p>
              </div>
            </div>
          </div>
          <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 𝐌𝐀-ᴄᴏᴀʜᴜɪʟᴀ ᴄᴏɴᴄᴇᴘᴛ. Todos los derechos reservados.</p>
              <p className="text-sm text-gray-500">
                Este servidor no está afiliado con Rockstar Games o Take-Two Interactive.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://1-portafolio1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 font-bold hover:text-red-300 transition-colors"
              >
                Web by Bautii.sab
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
