import { notFound } from 'next/navigation';
import { SEMINARS } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Award, BookOpen, Target, ChevronLeft } from 'lucide-react';

// Generate static params for all seminars
export async function generateStaticParams() {
  return SEMINARS.map((seminar) => ({
    slug: seminar.slug,
  }));
}

// Get seminar data by slug
function getSeminar(slug: string) {
  return SEMINARS.find((seminar) => seminar.slug === slug);
}

export default async function SeminarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seminar = getSeminar(slug);

  if (!seminar) {
    notFound();
  }

  const isUpcoming = new Date(seminar.date) >= new Date();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/seminars" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Seminars
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isUpcoming ? 'bg-green-500/20 text-green-100' : 'bg-gray-500/20 text-gray-100'
                }`}>
                  {isUpcoming ? 'Upcoming' : 'Past Event'}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/10">
                  {seminar.format}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{seminar.title}</h1>
              <p className="text-lg text-white/90 mb-6">{seminar.desc}</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(seminar.date).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>{seminar.duration}</span>
                </div>
                {seminar.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>{seminar.location}</span>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Register Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                  Download Brochure
                </button>
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={seminar.image}
                alt={seminar.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">About This Seminar</h2>
                <p className="text-gray-600 leading-relaxed">{seminar.description}</p>
              </div>
              
              {/* Objectives */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Learning Objectives
                </h2>
                <ul className="space-y-2">
                  {seminar.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Agenda */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Seminar Agenda
                </h2>
                <div className="space-y-4">
                  {seminar.agenda.map((item, idx) => {
                    const dayLabel = item.day || item.week;
                    return (
                      <div key={idx} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold text-lg mb-2">{dayLabel}</h3>
                        <ul className="space-y-1">
                          {item.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-gray-600">• {topic}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Target Audience */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Who Should Attend
                </h2>
                <p className="text-gray-600">{seminar.targetAudience}</p>
                {seminar.prerequisites && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Prerequisites</h3>
                    <p className="text-gray-600">{seminar.prerequisites}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Registration Fees</h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {seminar.price}
                </div>
                {seminar.earlyBird && (
                  <p className="text-sm text-green-600 mb-4">
                    Early bird: {seminar.earlyBird} (ends {new Date(new Date(seminar.date).setDate(new Date(seminar.date).getDate() - 30)).toLocaleDateString()})
                  </p>
                )}
                <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                  Register Now
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Group discounts available for 3+ participants
                </p>
              </div>
              
              {/* Instructor Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Your Instructor
                </h3>
                <p className="font-semibold text-lg">{seminar.instructor}</p>
                <p className="text-gray-600 text-sm mt-2">{seminar.instructorBio}</p>
              </div>
              
              {/* What's Included */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-primary">✓</span> Comprehensive course materials
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-primary">✓</span> Certificate of completion
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-primary">✓</span> Practical case studies
                  </li>
                  {seminar.format === "In-person" && (
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">✓</span> Lunch and refreshments
                    </li>
                  )}
                  {seminar.format === "Online" && (
                    <li className="flex items-center gap-2 text-gray-600">
                      <span className="text-primary">✓</span> Lifetime access to recordings
                    </li>
                  )}
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="text-primary">✓</span> Post-seminar support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
