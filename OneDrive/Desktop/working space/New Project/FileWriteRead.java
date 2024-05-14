import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileWriter;
import java.util.Scanner;


class FileWriteRead{

    public static void main(String[] args) {
        File file = new File("newfile.txt");
        try{
            if(file.createNewFile()){
                System.out.println("Created new file"+file.getName());
            }else{
                System.out.println("File is not created");
            }
        }catch(IOException e){
            System.out.println("There is an error");
        }// The above code creates a new file if it not already created and handles the exception it might throw

        //below this we will write to the file
        try{
            FileWriter fw = new FileWriter(file);
            fw.write("This is my first sentence");
            fw.close();

        }catch(IOException e){
            System.out.println("Error");
        }

        //The code just below this will read from file
        try{
            FileReader fr = new FileReader(file);
            Scanner sc = new Scanner(file);
            while(sc.hasNextLine()){
                String dt = sc.nextLine();
                System.out.println(dt);
            }
            fr.close();

        }catch(IOException e){
            System.out.println("error");
        }
        

        

        
    }
}