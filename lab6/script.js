
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const container = document.createElement('section');
    container.className = 'cards';
    main.appendChild(container);

    const loadBtn = document.getElementById('loadBtn');
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            loadBtn.disabled = true;
            loadBtn.classList.add('btn--loading');
            fetchAndRender()
                .finally(() => {
                    loadBtn.disabled = false;
                    loadBtn.classList.remove('btn--loading');
                });
        });
    }

    function renderPeople(people) {
        container.innerHTML = '';
        people.forEach((p) => {
            const card = document.createElement('article');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = p.picture || '';
            img.alt = p.name || 'Person picture';
            img.loading = 'lazy';

            const content = document.createElement('div');
            content.className = 'card__content';

            const list = document.createElement('ul');
            list.className = 'card__list';

            const liCity = document.createElement('li');
            liCity.innerHTML = `<span class="label">City</span><span class="value">${p.city || ''}</span>`;

            const liPost = document.createElement('li');
            liPost.innerHTML = `<span class="label">Postcode</span><span class="value">${p.postcode || ''}</span>`;

            const liCell = document.createElement('li');
            liCell.innerHTML = `<span class="label">Cell</span><span class="value">${p.cell || ''}</span>`;

            const liName = document.createElement('li');
            liName.innerHTML = `<span class="label">Name</span><span class="value">${p.name || ''}</span>`;

            list.appendChild(liCity);
            list.appendChild(liPost);
            list.appendChild(liCell);
            list.appendChild(liName);

            content.appendChild(list);
            card.appendChild(img);
            card.appendChild(content);
            container.appendChild(card);
        });
    }

    function fetchAndRender() {
        const url = 'https://randomuser.me/api/?results=5';
        return fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch from API');
                return res.json();
            })
            .then((data) => {
                const people = Array.isArray(data?.results)
                    ? data.results.map((p) => ({
                        picture: p.picture?.large || '',
                        city: p.location?.city || '',
                        postcode: String(p.location?.postcode ?? ''),
                        cell: p.cell || '',
                        name: `${p.name?.first ?? ''} ${p.name?.last ?? ''}`.trim()
                    }))
                    : [];
                if (people.length === 0) {
                    container.textContent = 'No people to display.';
                    return;
                }
                renderPeople(people);
            })
            .catch((err) => {
                container.textContent = 'Error loading data.';
                console.error(err);
            });
    }
});


