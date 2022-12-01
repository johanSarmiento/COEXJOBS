import javax.swing.JOptionPane;

public class main {
    public static void main(String[] args) {
        int op = Integer.parseInt(JOptionPane.showInputDialog(null, "que quieres calcular \n"
        +"1. area de un triangulo \n"
        +"2. area de un cuadrado"));

        switch (op) {
            case 1:
                int base = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese la base del triangulo"));
                int altura = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese la altura del triangulo"));
                triangulo calcularArea = new triangulo(base,altura);
                JOptionPane.showMessageDialog(null, calcularArea.calcularArea());
                break;
        
            case 2:
                int lado1 = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese el primer lado del cuadrado"));
                int lado2 = Integer.parseInt(JOptionPane.showInputDialog(null, "ingrese el segundo lado del cuadrado"));
                cuadrado calculCuadrado = new cuadrado(lado1, lado2);
                JOptionPane.showMessageDialog(null, calculCuadrado.calcularArea());
                break;
        }
    }
}
