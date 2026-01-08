/**
 * TIANGUIS CULTURAL - Directorio Filter
 * Client-side filtering for expositor grid
 */

// Embedded data to avoid CORS issues when opening from file:// protocol
const expositoresData = [
    {
        "id": "vinyl-paradise",
        "nombre": "Vinyl Paradise",
        "descripcion": "Los mejores vinilos de rock, punk y metal de los 80s y 90s. Importaciones directas y ediciones especiales.",
        "categoria": "vinilos",
        "puesto": "A-12",
        "imagen": "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=300&fit=crop",
        "tags": ["vinyl", "punk", "rock"]
    },
    {
        "id": "tinta-urbana",
        "nombre": "Tinta Urbana",
        "descripcion": "Tatuajes estilo old school, blackwork y neo-tradicional. 15 años de experiencia en la escena tapatía.",
        "categoria": "tatuajes",
        "puesto": "B-07",
        "imagen": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=400&h=300&fit=crop",
        "tags": ["tattoo", "arte"]
    },
    {
        "id": "vintage-gdl",
        "nombre": "Vintage GDL",
        "descripcion": "Ropa vintage americana de los 70s-90s. Camisetas de bandas, chamarra de mezclilla y piezas únicas.",
        "categoria": "ropa",
        "puesto": "C-23",
        "imagen": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
        "tags": ["ropa", "vintage"]
    },
    {
        "id": "disco-caos",
        "nombre": "Disco Caos",
        "descripcion": "CDs, cassettes y memorabilia de bandas underground mexicanas. Colección de más de 5,000 títulos.",
        "categoria": "vinilos",
        "puesto": "A-05",
        "imagen": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        "tags": ["vinyl", "música"]
    },
    {
        "id": "tacos-del-parque",
        "nombre": "Tacos del Parque",
        "descripcion": "Los legendarios tacos de birria y pastor que alimentan al tianguis desde 2012. Tortilla hecha a mano.",
        "categoria": "comida",
        "puesto": "F-01",
        "imagen": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
        "tags": ["comida", "mexicana"]
    },
    {
        "id": "arte-callejero",
        "nombre": "Arte Callejero MX",
        "descripcion": "Prints, stickers, posters y arte urbano de artistas locales. Ediciones limitadas y colaboraciones.",
        "categoria": "arte",
        "puesto": "D-15",
        "imagen": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
        "tags": ["arte", "prints"]
    },
    {
        "id": "cafe-el-ahumado",
        "nombre": "Café El Ahumado",
        "descripcion": "Café de especialidad tostado localmente. Cold brew, espresso y preparaciones de autor.",
        "categoria": "comida",
        "puesto": "F-08",
        "imagen": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
        "tags": ["café", "bebidas"]
    },
    {
        "id": "leather-works",
        "nombre": "Leather Works GDL",
        "descripcion": "Artículos de piel hechos a mano: cinturones, carteras, pulseras y accesorios únicos.",
        "categoria": "ropa",
        "puesto": "C-11",
        "imagen": "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=400&h=300&fit=crop",
        "tags": ["ropa", "piel", "accesorios"]
    },
    {
        "id": "serigrafias-punk",
        "nombre": "Serigrafías Punk",
        "descripcion": "Camisetas serigrafiadas a mano con diseños originales de la escena punk mexicana.",
        "categoria": "ropa",
        "puesto": "C-04",
        "imagen": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
        "tags": ["ropa", "punk", "serigrafía"]
    },
    {
        "id": "piercing-azteca",
        "nombre": "Piercing Azteca",
        "descripcion": "Perforaciones profesionales con joyería de titanio y acero quirúrgico. Certificados de sanidad.",
        "categoria": "tatuajes",
        "puesto": "B-12",
        "imagen": "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=300&fit=crop",
        "tags": ["piercing", "joyería"]
    },
    {
        "id": "comics-underground",
        "nombre": "Comics Underground",
        "descripcion": "Cómics independientes, fanzines y novelas gráficas. Obras de autores locales y traducciones.",
        "categoria": "arte",
        "puesto": "D-22",
        "imagen": "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=300&fit=crop",
        "tags": ["comics", "fanzines", "arte"]
    },
    {
        "id": "burritos-express",
        "nombre": "Burritos Express",
        "descripcion": "Burritos gigantes estilo Sonora. Carne asada, machaca y opciones vegetarianas.",
        "categoria": "comida",
        "puesto": "F-15",
        "imagen": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        "tags": ["comida", "burritos"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('directorio-grid');
    const filtersContainer = document.getElementById('filters');

    if (!grid || !filtersContainer) return;

    // Use embedded data (avoids CORS issues with file:// protocol)
    const expositores = expositoresData;

    // Define categories
    const categories = [
        { id: 'todos', label: 'Todos' },
        { id: 'vinilos', label: 'Vinilos' },
        { id: 'tatuajes', label: 'Tatuajes' },
        { id: 'ropa', label: 'Ropa' },
        { id: 'comida', label: 'Comida' },
        { id: 'arte', label: 'Arte' }
    ];

    // Render filters
    function renderFilters() {
        filtersContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat.id === 'todos' ? 'filter-btn--active' : ''}" 
              data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

        // Add event listeners
        filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filtersContainer.querySelectorAll('.filter-btn').forEach(b =>
                    b.classList.remove('filter-btn--active'));
                btn.classList.add('filter-btn--active');

                // Filter grid
                const category = btn.dataset.category;
                filterExpositores(category);
            });
        });
    }

    // Render expositor card
    function createCard(expositor) {
        return `
      <article class="card" data-category="${expositor.categoria}">
        <img src="${expositor.imagen}" alt="${expositor.nombre}" class="card__image" loading="lazy">
        <div class="card__content">
          <h3 class="card__title">${expositor.nombre}</h3>
          <p class="card__description">${expositor.descripcion}</p>
          <div class="tags-container">
            ${expositor.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="card__meta">
            <span class="mono">📍 Puesto ${expositor.puesto}</span>
          </div>
        </div>
      </article>
    `;
    }

    // Render all expositores
    function renderExpositores(items) {
        if (items.length === 0) {
            grid.innerHTML = '<p class="directorio-empty">No se encontraron expositores en esta categoría.</p>';
            return;
        }
        grid.innerHTML = items.map(createCard).join('');

        // Trigger reveal animation
        setTimeout(() => {
            grid.classList.add('is-visible');
        }, 100);
    }

    // Filter function
    function filterExpositores(category) {
        grid.classList.remove('is-visible');

        setTimeout(() => {
            const filtered = category === 'todos'
                ? expositores
                : expositores.filter(e => e.categoria === category);

            renderExpositores(filtered);
        }, 300);
    }

    // Initialize
    renderFilters();
    renderExpositores(expositores);
});
