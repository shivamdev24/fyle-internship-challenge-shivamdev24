import { Component, Input } from '@angular/core';
import { Repo } from '../types/repo';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {
  @Input() repos: Repo[] = [];
}
