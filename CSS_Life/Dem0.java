class Demo {

    static void display(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++)
            count++;

        System.out.println("Characters = " + count);
    }

    public static void main(String[] args) {
        display("Hello");
    }
}