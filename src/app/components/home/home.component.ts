import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nome = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nome = this.route.snapshot.paramMap.get('nome') || '';
  }
}
