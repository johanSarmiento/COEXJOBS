import javax.swing.JOptionPane;

public class main {
    public static void main(String[] args) {
    boolean bandera = false;
    do {
        int op = Integer.parseInt(JOptionPane.showInputDialog(null, "que quieres calcular \n"
        +"1. area de un triangulo \n"
        +"2. area de un cuadrado \n"
        +"3. salir"));

        switch (op) {
            case 1:
                int base = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese la base del triangulo"));
                int altura = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese la altura del triangulo"));
                triangulo calcularArea = new triangulo(base,altura);
                JOptionPane.showMessageDialog(null,"El area del triangulo es: "+calcularArea.calcularArea());
                break;
        
            case 2:
                int lado1 = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese el primer lado del cuadrado"));
                int lado2 = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese el segundo lado del cuadrado"));
                cuadrado calculCuadrado = new cuadrado(lado1, lado2);
                JOptionPane.showMessageDialog(null, "el area de un triangulo es: "+calculCuadrado.calcularArea());
                break;
            case 3:
                bandera=true;
            break;
        }        
    } while (bandera==false);

    }
}
