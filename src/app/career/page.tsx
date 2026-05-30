import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CTABanner } from "@/components/sections/CTABanner";
import { ArrowRight, MapPin, Briefcase, Mail } from "lucide-react";

export const metadata = {
  title: "Career | H Dentistry",
  description: "Join H Dentistry as we grow our modern multi-speciality dental clinic.",
};

const jobs = [
  {
    id: 1,
    title: "MDS Endodontist",
    type: "Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time MDS Doctor specialised in Endodontics."
  },
  {
    id: 2,
    title: "MDS Prosthodontist",
    type: "Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time MDS Doctor specialized in Prosthodontics."
  },
  {
    id: 3,
    title: "MDS Periodontist",
    type: "Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time MDS Doctor specialized in Periodontics."
  },
  {
    id: 4,
    title: "BDS Doctor",
    type: "Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time BDS doctor."
  },
  {
    id: 5,
    title: "Field Marketing Executive",
    type: "Non Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time Field Marketing Executive."
  },
  {
    id: 6,
    title: "Front Office Executive",
    type: "Non Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time Front Office Executive."
  },
  {
    id: 7,
    title: "Chair Side Assistant",
    type: "Non Clinical Jobs",
    location: "Erode",
    description: "H Dentistry is currently recruiting for a full time Chair Side Assistant."
  }
];

export default function CareerPage() {
  const clinicalJobs = jobs.filter(job => job.type === "Clinical Jobs");
  const nonClinicalJobs = jobs.filter(job => job.type === "Non Clinical Jobs");

  const JobCard = ({ job }: { job: typeof jobs[0] }) => (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mt-4 text-sm leading-relaxed border-t border-gray-50 pt-4">
        {job.description}
      </p>
      <button className="mt-6 inline-flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all">
        APPLY NOW <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section 
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Career</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-semibold tracking-wide uppercase">
            <span>Home</span>
            <span>›</span>
            <span>Career</span>
          </div>
        </div>
      </section>

      <main className="py-20 bg-[#f7f7f7] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600">
              H Dentistry is a modern multi-speciality dental clinic dedicated to providing comprehensive oral healthcare in Erode.
            </p>
          </div>

          <div className="space-y-16">
            {/* Clinical Jobs */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-4">Clinical Jobs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clinicalJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            {/* Non Clinical Jobs */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b pb-4">Non Clinical Jobs</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonClinicalJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Note */}
          <div className="mt-20 bg-brand/5 rounded-2xl p-8 text-center max-w-3xl mx-auto border border-brand/10">
            <Mail className="w-10 h-10 text-brand mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Don&apos;t see your role?</h3>
            <p className="text-gray-600">
              You can also send your resume directly to our team.
            </p>
            <a href="mailto:contact@hdentistry.in" className="mt-4 inline-block font-semibold text-brand hover:underline">
              contact@hdentistry.in
            </a>
          </div>
        </div>
      </main>
      
      <CTABanner />
      <Footer />
    </>
  );
}
