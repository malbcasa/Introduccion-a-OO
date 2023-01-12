class Cliente {
    nombreCliente;  
    dniCliente;
    rutCliente;
}

class CuentaCorriente {
    numero;
    #saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldo += valor;
            
        }
    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo){
            this.#saldo -= valor;
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}