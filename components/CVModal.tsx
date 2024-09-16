export default function CVModal({ isOpen, onClose, isDarkMode, isMobile }: { isOpen: boolean, onClose: () => void, isDarkMode: boolean, isMobile: boolean }) {
  if (!isOpen) return null;

  const bgColor = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900';
  const sectionHeaderColor = isDarkMode ? 'text-blue-200' : 'text-blue-600';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Alexis_Hernandez_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-50 flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
      <div className={`relative p-6 w-full ${isMobile ? 'h-full' : 'max-w-5xl max-h-[90vh]'} ${bgColor} overflow-y-auto`}>
        <div className="absolute top-2 right-2 flex items-center">
          <button
            onClick={handleDownload}
            className={`w-8 h-8 flex items-center justify-center rounded-full hover:text-neutral-400 transition-colors duration-200`}
            aria-label="Download CV"
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-square-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 12l4 4l4 -4" /><path d="M12 8v8" /><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>
          </button>
          <button
            onClick={onClose}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-red-700 hover:text-rose-500 transition-colors duration-200`}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-bold mb-2">ALEXIS HERNANDEZ</h1>
          <h2 className="text-xl mb-5">INFORMATION TECHNOLOGY ENGINEER</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <section className="mb-5">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>PROFILE</h3>
                <p className="text-sm">
                  IT Engineer specialized in software and hardware for industrial and entertainment sectors, passionate about creating efficient digital solutions.
                  <br></br>Starting young helped me quickly gain extensive experience and skills.
                </p>
              </section>

              <section className="mb-5">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>EXPERIENCE</h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Senior Full Stack Developer</h4>
                  <p className="italic">Big Bola Casinos | December 2022 to Now</p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>Coordination of IT projects with international teams, mostly from Europe.</li>
                    <li>Back-end (Java, TS and Python).</li>
                    <li>Front-end (Vue & React running in (NodeJS and Deno).</li>
                    <li>Managed and administered servers (RedHat, Arch & Debian) in AWS.</li>
                    <li>Synchronized database in (Docker and Podman) with SQL and NoSQL DB's.</li>
                    <li>Integrated payment gateways for app-to-app, DLL, and API transactions.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">IT Project Manager - Full Stack Developer - Technical Support</h4>
                  <p className="italic">Integrity Tool & Mold, Inc. | April 2018 to May 2022 - 4 years</p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    <li>Supervise project planning, execution, and delegation of responsibilities.</li>
                    <li>Back-end dev using Spring Boot (Java 8) and Front-end with Node.js and React.</li>
                    <li>Linux (Ubuntu Server) sysadmin with Dockers for microservices (Front/Back End).</li>
                    <li>Python scripting for subtask improvement and data backups.</li>
                    <li>Technical service in all IT areas (Networks, Cloud, Computers, Devices).</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>LANGUAGES</h3>
                <div className={`grid grid-cols-3 gap-3 rounded `}>
                  <div>
                    <p className="text-sm"><i>Spanish</i> | Native</p>  
                  </div>
                  <div>
                    <p className="text-sm"><i>English</i> | Expert</p>  
                  </div>
                  <div>
                    <p className="text-sm"><i>Mandarin</i> | Beginner</p>  
                  </div>
                </div>
              </section>
            </div>

            <div>
              <section className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>CONTACT</h3>
                <p className="text-sm">alexisyhd@gmail.com</p>
              </section>

              <section className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>EDUCATION</h3>
                <p className="text-sm">IT Engineer Degree - 2020</p>
                <p className="text-sm">Tech High School - 2016</p>
              </section>

              <section className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>SKILLS</h3>
                <p className="mt-2 text-sm">
                  <ul className="list-disc list-inside text-sm">
                    <li>International Team Leadership</li>
                    <li>Software & Hardware Troubleshooting</li>
                  </ul>
                </p>
                <div className={`grid grid-cols-2 gap-2 p-2 rounded `}>
                  <div>
                    <p className="font-semibold">Programming:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Java</li>
                      <li>JS / TS</li>
                      <li>Python / C++</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">Frameworks:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Spring Boot</li>
                      <li>React / Vue / Fresh</li>
                      <li>NodeJS / Deno</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">Databases:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>MariaDB / MySQL</li>
                      <li>MongoDB / Redis</li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">DevOps:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Linux</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${sectionHeaderColor}`}>INTERESTS</h3>
                <div className={`grid grid-cols-2 gap-2 rounded `}>
                  <div>
                    <ul className="list-disc list-inside text-sm">
                      <li>Hacking</li>
                      <li>Dancing</li>
                      <li>DIY</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc list-inside text-sm">
                      <li>Running</li>
                      <li>Drones</li>
                      <li>Calisthenics</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}