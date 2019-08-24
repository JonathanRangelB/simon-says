/* 
Javascript tiene algo llamado el callstack, que es donde se van mandando a llamar las funciones o instrucciones una tras otra, no puede ejecutar mas de 1 a la vez, pero existe un segundo stack llamada "La cola de tareas", en ese segundo stack se iran apilando las instrucciones que necesitaron tiempo para ejecutarse, que el propio programador indico, como puede ser una llamada a una API o algun metodo que sabremos tomara tiempo y que no necesariamente necesitaremos en ese momento, en cuanto javascript termine todo lo que tiene que hacer en su pila de stack normal, solo hasta ese momento se pondra a trabajar con la cola de tareas

en el siguiente ejemplo, la letra b se ejecutara solo hasta que la instruccion que tiene la letra c termine de ejecutarse, ademas de que le pondremos un tiempo de espera de 2000 milisegundos, por lo tanto el output de este codigo sera:
a
c
b

esto es algo magico llamado Asincronismo.

algo que hay que señalar mucho aqui es jamás bloquear el "event loop", osea que el stack principal no se quede ciclado o con una duracion extensa, porque de lo contrario la cola de tareas jamas podra ser llamada, o tardara mucho en ser atendida
*/
console.log('a')
setTimeout(() => console.log('b'), 2000)
console.log('c')