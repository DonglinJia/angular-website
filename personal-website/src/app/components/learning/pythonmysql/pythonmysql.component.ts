import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pythonmysql',
  templateUrl: './pythonmysql.component.html',
  styleUrls: ['./pythonmysql.component.scss']
})
export class PythonmysqlComponent implements OnInit {

  public imageURL;
  constructor() { }

  ngOnInit(): void {
    this.imageURL = 'assets/img/python_mysql.png';
  }

  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/mysql.pdf');
    link.setAttribute('download', 'mysql.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  openFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/files/mysql.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
