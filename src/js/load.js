document.addEventListener("DOMContentLoaded", () => {
    const loadTags = document.querySelectorAll("load");
  
    loadTags.forEach(loadTag => {
      const src = loadTag.getAttribute("src");
  
      if (src) {
        fetch(src)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to load ${src}: ${response.statusText}`);
            }
            return response.text();
          })
          .then(data => {
            // Создать временный контейнер для парсинга HTML
            const tempContainer = document.createElement("div");
            tempContainer.innerHTML = data;
  
            // Заменить <load> на содержимое
            while (tempContainer.firstChild) {
              loadTag.parentNode.insertBefore(tempContainer.firstChild, loadTag);
            }
  
            loadTag.remove();
          })
          .catch(error => {
            console.error(error);
            loadTag.innerHTML = `<p>Error loading content from ${src}</p>`;
          });
      } else {
        console.error("No 'src' attribute found for <load> tag.");
      }
    });
  });  