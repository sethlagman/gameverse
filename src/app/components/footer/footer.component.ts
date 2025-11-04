import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: true,
	template: `
		<footer class="footer">© {{ year }} GameVerse</footer>
	`,
	styles: [
		`
		.footer { padding:24px 16px; border-top:1px solid #eee; margin-top: 24px; color:#666; text-align:center; }
		`
	]
})
export class FooterComponent {
	readonly year = new Date().getFullYear();
}

