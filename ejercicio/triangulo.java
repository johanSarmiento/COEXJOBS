public class triangulo extends abstracto {
    public triangulo(int base,int altura){
        super(base, altura);
    }
    @Override
    public int calcularArea() {
        int area = (base*altura)/2;
        return area;
    }
}
