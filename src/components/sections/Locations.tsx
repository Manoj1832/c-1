import { MapPin, Phone, Navigation } from "lucide-react";

const locations = [
  { name: "H Dentistry — Erode", phone: "9363629361", directions: "https://maps.google.com" },
];

export default function Locations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="section-label">Our Clinic</p>
          <h2 className="section-title">Location</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Visit us at our modern dental clinic in Erode for expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="card flex flex-col gap-3 border border-gray-100"
            >
              <div className="flex items-center gap-2 text-brand font-semibold text-lg">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {loc.name}
              </div>
              {loc.phone && (
                <a
                  href={`tel:+91${loc.phone}`}
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 {loc.phone}
                </a>
              )}
              {loc.directions && (
                <a
                  href={loc.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-brand transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
