interface CompanyLogo {
    name: string;
    url: string;
    className?: string;
  }
  
  const companies: CompanyLogo[] = [
    {
      name: "Oracle",
      url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      className: "w-32"
    },
    {
      name: "Morpheus",
      url: "https://www.svgrepo.com/show/354093/morpheus.svg",
      className: "w-28"
    },
    {
      name: "Samsung",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      className: "w-32"
    },
    {
      name: "Monday.com",
      url: "https://static.wixstatic.com/media/3aff01_38da19e04fbb4bfb92c8ef68d51e47aa~mv2.png/v1/fill/w_366,h_300,al_c,q_85,enc_avif,quality_auto/Frame%2025.png",
      className: "w-28"
    },
    {
      name: "Segment",
      url: "https://1000logos.net/wp-content/uploads/2024/08/Segment-Logo.jpg",
      className: "w-28"
    }
  ];
  
  function App() {
    return (
      <div className=" bg-white-50 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trusted By Over 100+ Startups and Freelance Business
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={company.url}
                  alt={`${company.name} logo`}
                  className={company.className}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;