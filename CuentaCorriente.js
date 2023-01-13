export class CuentaCorriente {
    #cliente;
    numero;
    #saldo;
    agencia;

    set cliente(valor){
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(){
        this.#cliente = null;
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

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}

