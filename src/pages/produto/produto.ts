import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../services/produtos';

@Component({
	selector: 'page-produto',
	templateUrl: 'produto.html',
	providers: [ ProdutoService ]
})
export class ProdutoPage {
	public title: String = 'Produto';
	produto: any = {
		codigo: '',
		descricao: '',
		preco: '',
		quantidade: '',
		especificacao: '',
		imagem: ''
	};
	codigo: String;

	constructor(public navCtrl: NavController, public navParams: NavParams, public ps: ProdutoService) {}

	ionViewDidLoad() {
		this.ps
			.obterProduto(this.navParams.get('codigo'))
			.subscribe((dados) => (this.produto = dados), (erro) => console.log(erro));
	}

	goBack() {
		this.navCtrl.pop();
	}
}
