const headerLinks = document.querySelectorAll('.js-header-link');

headerLinks.forEach(headerLink => {
	headerLink.addEventListener('click', event => {
		const blockId = event.target.dataset.href;
		const block = document.getElementById(blockId);

		block.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
	});
});
