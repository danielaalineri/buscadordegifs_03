import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicos/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dados: any = [];

  constructor(private dataSvc: DataService) { }

  carregarDados(){
    this.dataSvc.obterGifs().subscribe( (res:any)=> {
      this.dados = res.data;
      console.log(res);
    });
  }
  
  ngOnInit() {
    this.carregarDados();  
  }

  onSearchType(termo) {
    console.log(termo);
    if(termo !== ""){
      this.dataSvc.pesquisarGifs(termo).subscribe((res:any)=>{
        this.dados = res.data
        console.log(res.data);
      },(err)=>{ 
        console.log("Ocorreu um erro: ", err); 
      });
    }else{
      this.carregarDados();
    }  
  }

}
