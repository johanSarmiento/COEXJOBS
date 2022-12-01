public class cuadrado extends abstracto {
    public cuadrado (int base,int altura){
        super(base, altura);
    }
    @Override
    public int calcularArea() {
        int area = base*altura;
        return area;
    }
}
