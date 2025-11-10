import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const routes = [
    {
      title: 'Горная тропа Кузнецкого Алатау',
      duration: '3 дня',
      difficulty: 'Средняя',
      image: 'https://cdn.poehali.dev/projects/8ef9d3a4-1951-4ee2-a294-aa5dde5a0d21/files/9ef0e4b2-9a55-4347-8c99-66945d98fc92.jpg',
      description: 'Захватывающий маршрут через горные перевалы и альпийские луга'
    },
    {
      title: 'Зимние склоны Шерегеша',
      duration: '1 день',
      difficulty: 'Легкая',
      image: 'https://cdn.poehali.dev/projects/8ef9d3a4-1951-4ee2-a294-aa5dde5a0d21/files/536aabe7-5677-4757-b760-1e28cbbfab10.jpg',
      description: 'Лучший горнолыжный курорт Сибири с трассами для всех уровней'
    },
    {
      title: 'Этнотур по Кузбассу',
      duration: '2 дня',
      difficulty: 'Легкая',
      image: 'https://cdn.poehali.dev/projects/8ef9d3a4-1951-4ee2-a294-aa5dde5a0d21/files/f93a93a5-7349-46ba-9ec1-12d642aac86b.jpg',
      description: 'Знакомство с культурой и традициями коренных народов Сибири'
    }
  ];

  const attractions = [
    { icon: 'Mountain', title: 'Томская Писаница', description: 'Музей-заповедник наскальных рисунков' },
    { icon: 'Trees', title: 'Кузнецкий Алатау', description: 'Национальный парк с уникальной природой' },
    { icon: 'Landmark', title: 'Шорский парк', description: 'Горно-таежная территория с водопадами' },
    { icon: 'Castle', title: 'Красная Горка', description: 'Музей-заповедник угольной промышленности' }
  ];

  const events = [
    { date: '15 ДЕК', title: 'Гонка героев', location: 'Шерегеш' },
    { date: '1 ЯНВ', title: 'Новогодний фестиваль', location: 'Кемерово' },
    { date: '23 ФЕВ', title: 'Зимние старты', location: 'Кузнецкий Алатау' },
    { date: '8 МАР', title: 'Весенний карнавал', location: 'Новокузнецк' }
  ];

  const accommodations = [
    { name: 'Отель Sheregesh', type: 'Гостиница', price: 'от 4500₽', stars: 4 },
    { name: 'База отдыха "Таежная"', type: 'База отдыха', price: 'от 2800₽', stars: 3 },
    { name: 'Апарт-отель Куба', type: 'Апартаменты', price: 'от 3200₽', stars: 4 },
    { name: 'Гостевой дом "Сибирь"', type: 'Гостевой дом', price: 'от 1800₽', stars: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Кузбасс</h1>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'routes', 'attractions', 'events', 'accommodation', 'contact'].map((section) => {
                const labels: Record<string, string> = {
                  home: 'Главная',
                  routes: 'Маршруты',
                  attractions: 'Достопримечательности',
                  events: 'События',
                  accommodation: 'Размещение',
                  contact: 'Контакты'
                };
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === section ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    {labels[section]}
                  </button>
                );
              })}
            </div>
            <Button size="sm" className="hidden md:flex">
              Забронировать тур
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/8ef9d3a4-1951-4ee2-a294-aa5dde5a0d21/files/9ef0e4b2-9a55-4347-8c99-66945d98fc92.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Откройте для себя Кузбасс</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Горы, тайга и уникальные природные красоты Сибири ждут вас
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('routes')}>
              Выбрать маршрут
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="routes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Популярные маршруты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите приключение по душе — от горных троп до культурных путешествий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {route.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{route.title}</h4>
                  <p className="text-muted-foreground mb-4">{route.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Signal" size={16} />
                    <span>Сложность: {route.difficulty}</span>
                  </div>
                  <Button className="w-full">Подробнее</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="attractions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Главные достопримечательности</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Исследуйте природные и культурные богатства региона
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={attraction.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{attraction.title}</h4>
                <p className="text-sm text-muted-foreground">{attraction.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Предстоящие события</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Не пропустите яркие мероприятия и фестивали Кузбасса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground px-4 py-3 rounded-lg text-center flex-shrink-0">
                    <div className="text-xs font-semibold">{event.date}</div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{event.title}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="accommodation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Размещение</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комфортное проживание на любой бюджет
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodations.map((place, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{place.name}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(place.stars)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{place.type}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{place.price}</span>
                    <Button size="sm">Забронировать</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Готовы к приключениям?</h3>
            <p className="text-lg mb-8 opacity-90">
              Свяжитесь с нами для консультации и планирования вашего путешествия по Кузбассу
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <Icon name="Phone" size={32} />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="opacity-90">+7 (3842) 123-456</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="Mail" size={32} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="opacity-90">info@kuzbass-tour.ru</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Icon name="MapPin" size={32} />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="opacity-90">г. Кемерово, ул. Весенняя, 20</p>
                </div>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2024 Туристический портал Кузбасса. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
