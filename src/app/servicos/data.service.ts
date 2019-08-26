import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  obterGifs(){
    return this._http.get("https://api.giphy.com/v1/gifs/trending?api_key=y7U5iVRTlHOiicAHHoIEa4riwzG2AT4T&limit=15&rating=G");
  }

  pesquisarGifs(pesquisa){
    return this._http.get(`https://api.giphy.com/v1/gifs/search?api_key=0LvAYgtkqOV07fUesZmc2PsBZkWLlI0x&q=${pesquisa}&limit=15&offset=0&rating=G&lang=pt`);
  }

}
