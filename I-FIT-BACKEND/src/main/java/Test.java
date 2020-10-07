public class Test {

    public static void main(String[] args) {

        int x = 0, y = 10;

        try{
            y/=x=2;
            System.out.println(y);
        }catch (Exception e){
            System.out.println("error");
        }
    }
}
