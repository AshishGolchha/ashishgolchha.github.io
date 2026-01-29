// // ===============================
// // PROJECTS DATA
// // ===============================
// const projects = [
//   {
//     title: "PunchDesk",
//     description:
//       "Production-ready attendance management backend with JWT authentication and role-based access.",
//     image: "assets/projects/punchdesk.png",
//     github: "https://github.com/ashishgolchha/punchdesk",
//     demo: "https://punchdesk.vercel.app"
//   },
//   {
//     title: "AI PDF Chat Assistant",
//     description:
//       "Upload PDFs and chat with them using AI-powered semantic search and context-aware responses.",
//     image: "assets/projects/pdf-chat.png",
//     github: "https://github.com/ashishgolchha/pdf-chat",
//     demo: "https://pdf-chat-assistent.vercel.app/"
//   },
//   {
//     title: "Archery Management System",
//     description:
//       "Web platform to manage students, tournaments and championships across multiple cities.",
//     image: "assets/projects/archery.png",
//     github: "#",
//     demo: "#"
//   },
//   {
//     title: "ServiceConnect AI",
//     description:
//       "AI-powered business discovery and customer interaction platform using embeddings and city-based search.",
//     image: "assets/projects/serviceconnect.png",
//     github: "#",
//     demo: "#"
//   }
// ];

// // ===============================
// // RENDER PROJECTS
// // ===============================
// const grid = document.getElementById("projectsGrid");

// if (grid) {
//   projects.forEach(project => {
//     const card = document.createElement("div");
//     card.className = "project-card";

//     card.innerHTML = `
//       <div class="project-image">
//         <img src="${project.image}" alt="${project.title}">
//       </div>

//       <div class="project-content">
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>

//         <div class="project-actions">
//           ${
//             project.github && project.github !== "#"
//               ? `<a href="${project.github}" target="_blank" class="outline-btn">GitHub</a>`
//               : ""
//           }
//           ${
//             project.demo && project.demo !== "#"
//               ? `<a href="${project.demo}" target="_blank" class="primary-btn">Demo</a>`
//               : ""
//           }
//         </div>
//       </div>
//     `;

//     grid.appendChild(card);
//   });
// }
