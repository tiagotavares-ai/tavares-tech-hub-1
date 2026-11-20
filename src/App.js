import React from 'react';
import './App.css';
import { 
  Briefcase, 
  Smartphone, 
  FileText, 
  Calculator, 
  TrendingUp, 
  MessageSquare, 
  Palette, 
  Lock, 
  Unlock, 
  Shield, 
  Mail,
  Phone,
  MapPin,
  Check,
  Zap,
  Users,
  Award
} from 'lucide-react';

const WHATSAPP_NUMBER = '5588982340081';

const whatsappLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

function App() {
  return (
    <div className="App min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="text-blue-900 w-6 h-6" />
            <h1 className="text-lg md:text-xl font-bold text-blue-900">Tavares Tech Hub</h1>
          </div>
          <a
            href={whatsappLink('Olá! Gostaria de saber mais sobre os serviços.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm md:text-base font-medium flex items-center gap-2"
            data-testid="header-contact-btn"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white" data-testid="hero-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Soluções Inteligentes para Negócios e Smartphones
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Consultoria Estratégica e Assistência Técnica Especializada por Tiago Tavares
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink('Olá Tiago! Gostaria de conhecer melhor seus serviços.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="hero-cta-btn"
              >
                <MessageSquare className="w-5 h-5" />
                Fale Comigo Agora
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Massapê-CE</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Especialista em Pequenos Negócios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Empresariais */}
      <section className="py-12 md:py-16 bg-gray-50" data-testid="business-solutions-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">Soluções Empresariais</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Gestão Estratégica para MEI e Pequenos Negócios
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serviços especializados para organizar, profissionalizar e expandir seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Calculator className="w-8 h-8" />}
              title="Consultoria Fiscal"
              description="Orientação completa sobre impostos e obrigações fiscais"
              price="R$ 100"
              whatsappMessage="Olá! Gostaria de saber mais sobre a Consultoria Fiscal."
              testId="service-consultoria-fiscal"
            />

            <ServiceCard
              icon={<Zap className="w-8 h-8" />}
              title="Pacote Imersão Digital"
              description="Presença digital completa para seu negócio"
              price="R$ 75"
              whatsappMessage="Olá! Gostaria de saber mais sobre o Pacote Imersão Digital."
              testId="service-imersao-digital"
            />

            <ServiceCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Fluxo de Caixa"
              description="Controle financeiro organizado e estratégico"
              price="R$ 70"
              whatsappMessage="Olá! Gostaria de saber mais sobre o Fluxo de Caixa."
              testId="service-fluxo-caixa"
            />

            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Consultoria Administrativa"
              description="Otimização de processos e gestão eficiente"
              price="R$ 50"
              whatsappMessage="Olá! Gostaria de saber mais sobre a Consultoria Administrativa."
              testId="service-consultoria-admin"
            />

            <ServiceCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="WhatsApp Business"
              description="Configuração profissional para vendas"
              price="R$ 60"
              whatsappMessage="Olá! Gostaria de saber mais sobre o WhatsApp Business."
              testId="service-whatsapp-business"
            />

            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="Logotipo + Slogan"
              description="Identidade visual profissional"
              price="R$ 60"
              whatsappMessage="Olá! Gostaria de saber mais sobre Logotipo + Slogan."
              testId="service-logo-slogan"
            />

            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Regularização MEI/DASN"
              description="Documentação e conformidade legal"
              price="R$ 40"
              whatsappMessage="Olá! Gostaria de saber mais sobre Regularização MEI/DASN."
              testId="service-mei-dasn"
            />

            <ServiceCard
              icon={<Palette className="w-8 h-8" />}
              title="Arte para Posts"
              description="Design profissional para redes sociais"
              price="R$ 10"
              whatsappMessage="Olá! Gostaria de saber mais sobre Arte para Posts."
              testId="service-arte-posts"
            />
          </div>
        </div>
      </section>

      {/* Assistência Técnica */}
      <section className="py-12 md:py-16 bg-white" data-testid="technical-support-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
              <Smartphone className="w-5 h-5" />
              <span className="font-semibold">Assistência Técnica</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Soluções Técnicas em Software e Acessos
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Recuperação, desbloqueio e otimização de dispositivos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Unlock className="w-8 h-8" />}
              title="Desbloqueio de iPhone"
              description="Desbloqueio profissional e seguro"
              price="R$ 140"
              whatsappMessage="Olá! Gostaria de saber mais sobre Desbloqueio de iPhone."
              testId="service-desbloqueio-iphone"
              featured
            />

            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Desbloqueio de Android"
              description="Desbloqueio de aparelhos Android"
              price="R$ 70"
              whatsappMessage="Olá! Gostaria de saber mais sobre Desbloqueio de Android."
              testId="service-desbloqueio-android"
            />

            <ServiceCard
              icon={<Lock className="w-8 h-8" />}
              title="Recuperação de Senhas e Acessos"
              description="Recupere o acesso às suas contas"
              price="A partir de R$ 10"
              whatsappMessage="Olá! Gostaria de saber mais sobre Recuperação de Senhas."
              testId="service-recuperacao-senhas"
            />

            <ServiceCard
              icon={<Shield className="w-8 h-8" />}
              title="Abertura de Contas e Seguros"
              description="Auxílio em cadastros e seguros digitais"
              price="A partir de R$ 25"
              whatsappMessage="Olá! Gostaria de saber mais sobre Abertura de Contas."
              testId="service-abertura-contas"
            />

            <ServiceCard
              icon={<Zap className="w-8 h-8" />}
              title="Detox Digital e Otimização"
              description="Limpeza e aceleração do sistema"
              price="R$ 10"
              whatsappMessage="Olá! Gostaria de saber mais sobre Detox Digital."
              testId="service-detox-digital"
            />
          </div>
        </div>
      </section>

      {/* Papelaria Digital */}
      <section className="py-12 md:py-16 bg-gray-50" data-testid="digital-stationery-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">Papelaria Digital</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Currículos Profissionais
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Destaque-se no mercado de trabalho com um currículo bem elaborado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Currículo Premium */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-900 relative" data-testid="curriculum-premium">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Completo
                </span>
              </div>
              <div className="text-center mb-6">
                <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Premium</h4>
                <p className="text-gray-600 mb-4">Design exclusivo e diferenciado</p>
                <div className="text-4xl font-bold text-blue-900">R$ 15</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Design moderno e exclusivo</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Revisão de conteúdo</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Formatação profissional</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>2 revisões incluídas</span>
                </li>
              </ul>
              <a
                href={whatsappLink('Olá! Gostaria de solicitar um Currículo Premium.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-center"
                data-testid="curriculum-premium-btn"
              >
                Solicitar Agora
              </a>
            </div>

            {/* Currículo Profissional */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200" data-testid="curriculum-professional">
              <div className="text-center mb-6">
                <FileText className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Profissional</h4>
                <p className="text-gray-600 mb-4">Layout limpo e objetivo</p>
                <div className="text-4xl font-bold text-blue-900">R$ 10</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Design profissional</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Formatação básica</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>1 revisão incluída</span>
                </li>
              </ul>
              <a
                href={whatsappLink('Olá! Gostaria de solicitar um Currículo Profissional.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center"
                data-testid="curriculum-professional-btn"
              >
                Solicitar Agora
              </a>
            </div>

            {/* Currículo Simples */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200" data-testid="curriculum-simple">
              <div className="text-center mb-6">
                <FileText className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Simples</h4>
                <p className="text-gray-600 mb-4">Solução rápida e eficiente</p>
                <div className="text-4xl font-bold text-blue-900">R$ 5</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Layout básico</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Formatação simples</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Entrega rápida</span>
                </li>
              </ul>
              <a
                href={whatsappLink('Olá! Gostaria de solicitar um Currículo Simples.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center"
                data-testid="curriculum-simple-btn"
              >
                Solicitar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12" data-testid="footer-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-8 h-8" />
              <h4 className="text-2xl font-bold">Tavares Tech Hub</h4>
            </div>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
              Comprometido com a eficiência, inovação e o sucesso dos pequenos negócios de Massapê-CE e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2 text-blue-300" />
              <h5 className="font-semibold mb-1">Localização</h5>
              <p className="text-blue-100">Mumbaba de Baixo</p>
              <p className="text-blue-100">Massapê-CE</p>
            </div>
            <div className="text-center">
              <Phone className="w-6 h-6 mx-auto mb-2 text-blue-300" />
              <h5 className="font-semibold mb-1">WhatsApp</h5>
              <a 
                href={whatsappLink('Olá! Gostaria de mais informações.')}
                className="text-blue-100 hover:text-white transition-colors"
                data-testid="footer-whatsapp-link"
              >
                (88) 98234-0081
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 mx-auto mb-2 text-blue-300" />
              <h5 className="font-semibold mb-1">Contato</h5>
              <p className="text-blue-100">Tiago Tavares</p>
              <p className="text-blue-100 text-sm">Especialista em Soluções Digitais</p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-blue-800">
            <p className="text-blue-200">
              © 2025 Tavares Tech Hub. Simplificando a vida através da tecnologia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ServiceCard = ({ icon, title, description, price, whatsappMessage, testId, featured }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 transition-all hover:shadow-xl ${
        featured ? 'border-2 border-blue-900 shadow-lg' : 'border border-gray-200 shadow-md'
      }`}
      data-testid={testId}
    >
      <div className="text-blue-900 mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="text-2xl font-bold text-blue-900 mb-4">{price}</div>
      <a
        href={whatsappLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-3 rounded-lg transition-colors font-semibold text-center ${
          featured 
            ? 'bg-blue-900 text-white hover:bg-blue-800' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
        data-testid={`${testId}-btn`}
      >
        Solicitar Serviço
      </a>
    </div>
  );
};

export default App;
