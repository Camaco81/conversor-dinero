const app = Vue.createApp({

	data(){
		return{
			selected:"Selecione una opcion",
			precio:0,
			cantidad:0,
			conversion:0


		}
	},
	methods:{
	comprobarYCalular(){
		if (this.selected==="bolivar") {
			Swal.fire({
				icon:"success",
				title:"Conversion de bolivar a dolar  exitosamente",
				confirmButtonText:"Aceptar"
			})
			this.deBolivarAdolar();
		}				
		else{
			Swal.fire({
				icon:"success",
				title:"Conversion de dolar a bolivar exitosamente",
				confirmButtonText:"Aceptar"
			})
			this.deDolarAbolivar();
		}
		
	},
	deBolivarAdolar(){
			const conversionB=this.precio/this.cantidad;
			this.conversion=conversionB.toFixed(2) + "$";
	},
	deDolarAbolivar(){
			const conversionD= this.precio*this.cantidad;
			this.conversion=conversionD.toFixed(2) + "Bs";
			}
   }
}).mount("#app")