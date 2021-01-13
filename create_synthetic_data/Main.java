package com.company;


import java.util.Locale;

public class Main {


    public static void main(String[] args) {
        String[] departmentList = {"Marketing","Operations","Finance","Sales","Human Resources"};
        String[] names = {"Phoebe","Howard","Owen","Donnie","Carol","Malinda","Arline","Franklin","Stanford","Chris"};
        String[] surnames={"Garrett", "Mullen", "Chase", "Prosser", "Redmond", "Calvert", "Calvert", "Preston", "Hassan", "Driscoll"};
        String[] emails = {"1rahm@bloghost.com","bmiloud.ka@instaku-media.com","ymusta.minouk@xmate.fun","umahd@getemail.tech","pabdokhiry274w@boatparty.today","dnoun@kerrilid.win","2emobleach120@kimfetme.com","ctunc@rstsec.com","usamy-samy000o@imageboard4free.com","vbenfifi.l@googl.win"};
        String[] citynames = {"Ekliephis","Bodence","Bepolis","Flumross","Lephia","Grico","Todon","Bance","Ansham","Ariophis","OgabusCriafdence","Bribert","Tromouth","Klarpolis","Tronio","Dison","Vlin","Estermery","Entodale"};
        String[] companies= {"Mitoryca","Contrexo","Zacation","Kaqqo","Zuzal","Zolig","Prosowo","Guxxo","Jaxxia"};
        String[] phones = {"(780) 519-8386","(294) 226-7210","(844) 486-7852","(665) 459-5522","(923) 640-4878","(555) 355-6017","(924) 288-0632","(466) 929-5954","(708) 925-6655"};
        int nExamples = 60;
        int min = -1;
        int max = 1;
        int i1,i2,i3,i4,i5,i6,i7,i8;
        double n1, n2, n3, n4, n5, n6,n7,n8;
        String s1,s2,s3,s4,s5;

        for (int i = 0; i < departmentList.length; i++) {
            System.out.printf(Locale.US, "INSERT INTO Department (DepartmentName, NumberOfEmployees)\nVALUES ('%s', %d);\n", departmentList[i], 20);
        }
        for (int i = 0; i < 26; i++) {
            s1 = names[(int)(Math.random()*(names.length))];
            s2 = surnames[(int)(Math.random()*(surnames.length))];
            s3 = (int)(Math.random()*1250)+emails[(int)(Math.random()*(emails.length))];
            s4 = citynames[(int)(Math.random()*(citynames.length))];
            s5 = (int)(Math.random()*(1997-1967)+1967)+"/"+(int)((Math.random()+1)*6)+"/"+(int)((Math.random()+1)*13);
            System.out.printf(Locale.US, "INSERT INTO Employee (DepartmentID, FirstName, LastName, Email, City, Birthdate)\nVALUES (%d, '%s', '%s', '%s', '%s', '%s');\n",2,s1,s2, s3,s4,s5);
        }
        for (int i = 0; i < nExamples-26; i++) {
            s1 = names[(int)(Math.random()*(names.length))];
            s2 = surnames[(int)(Math.random()*(surnames.length))];
            s3 = (int)(Math.random()*1250)+emails[(int)(Math.random()*(emails.length))];
            s4 = citynames[(int)(Math.random()*(citynames.length))];
            s5 = (int)(Math.random()*(1997-1967)+1967)+"/"+(int)((Math.random()+1)*6)+"/"+(int)((Math.random()+1)*13);
            i1 = (int)(Math.random()*departmentList.length+1);
            System.out.printf(Locale.US, "INSERT INTO Employee (DepartmentID, FirstName, LastName, Email, City, Birthdate)\nVALUES (%d, '%s', '%s', '%s', '%s','%s');\n",i1,s1,s2, s3,s4,s5);
        }

        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * 26)+1;
            n1 = Math.random() * (max - min + 1) + min;
            n2 = Math.random() * (max - min + 1) + min;
            n3 = Math.random() * (max - min + 1) + min;
            n4 = Math.random() * (max - min + 1) + min;
            n5 = Math.random() * (max - min + 1) + min;
            n6 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n7 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            System.out.printf(Locale.US, "INSERT INTO Geometric_Body_Measurement (MeasurementDate, MeasurementEmployee, LGE15001, LPE15002, LGE15003, LPE15004, LGE15005)\nVALUES ('2020/%d/%d', %d,  %.2f, %.2f, %.2f, %.2f, %.2f);\n",(int)n6, (int)n7,i1, n1, n2, n3, n4, n5);
        }

        min = -1;
        max = 5;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * 26)+1;
            n1 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n2 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            n3 = Math.random() * (7 - 6 + 1 ) + 6 ;
            n4 = Math.random() * (max - min + 1) + min;
            n7 = Math.random() * (max - min + 1) + 0.5;
            n5 = Math.random() * (1 - min + 1) + min;
            System.out.printf(Locale.US, "INSERT INTO Steer_Measurement (MeasurementDate,MeasurementEmployee, Radius, Pressure, Height, Slope)\nVALUES ('2020/%d/%d', %d,%.2f, %.2f, %.2f, %.2f);\n",(int)n1, (int)n2, i1, n3, n4, n7, n5);
        }

        min = 1;
        max = 5;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * 26)+1;
            n1 = Math.random() * (max * 45 - min * 150 + 1) + 150;
            n2 = Math.random() * (max - min + 1) + min;
            n3 = Math.random() * (n2 - min ) + min;
            n4 = Math.random() * (max - min + 1) + min;
            n6 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n7 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            System.out.printf(Locale.US, "INSERT INTO Driving_Test (TestDate, TestEmployee, MaxSpeed, MaxBrakeDuration, MinBrakeDuration, AirbagTriggerTime)\nVALUES ('2020/%d/%d', %d, %.2f, %.2f, %.2f, %.2f);\n", (int)n6, (int)n7, i1, n1, n2, n3, n4);
        }

        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * 26)+1;
            i2 = (int)(Math.random()+0.5);
            i3 = (int)(Math.random()+0.5);
            i4 = (int)(Math.random()+0.5);
            n4 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n5 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);

            System.out.printf(Locale.US, "INSERT INTO Liquid_Test (TestDate, TestEmployee, OilTest, WaterTest, FuelTest)\nVALUES ('2020/%d/%d', %d, %d, %d, %d);\n", (int)n4, (int)n5, i1, i2, i3, i4);
        }

        min = -3;
        max = 4;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * 26)+1;
            n1 = Math.random() * (max - min + 1) + min;
            n2 = Math.random() * (max - min + 1) + min;
            n3 = Math.random() * (max - min + 1) + min;
            n4 = Math.random() * (max - min + 1) + min;
            n5 = Math.random() * (max - min + 1) + min;
            n6 = Math.random() * (max - min + 1) + min;
            n7 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n8 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            System.out.printf(Locale.US, "INSERT INTO Montage_Measurement (MeasurementDate, MeasurementEmployee,G101_SX, G102_SX, G103_SX, G104_DX, G105_DX, G106_DX)\nVALUES ('2020/%d/%d', %d, %.2f, %.2f, %.2f, %.2f, %.2f, %.2f);\n",(int)n7, (int)n8, i1, n1, n2, n3, n4, n5, n6);
        }


        for (int i = 0; i < companies.length; i++) {
            s4 = citynames[(int)(Math.random()*(citynames.length))];
            System.out.printf(Locale.US, "INSERT INTO Outsource_Company (CompanyName, Phone, Email,City)\nVALUES ('%s', '%s', '%s', '%s');\n", companies[i],"+"+phones[i],"contact"+companies[i].toLowerCase()+"@"+companies[i].toLowerCase()+".com",s4);
        }


        min = -1;
        max = 5;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * companies.length)+1;
            n1 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n2 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            n3 = Math.random() * (max - min + 1 + 1) + min + 1;
            n4 = Math.random() * (n3 - min + 1) + min;
            System.out.printf(Locale.US, "INSERT INTO Rubber_Silicone_Measurement (CompanyID,MeasurementDate, MaxPressure, MinPressure)\nVALUES (%d, '2020/%d/%d', %.2f, %.2f);\n", i1, (int)n1, (int)n2, n3, n4);
        }

        min = -1;
        max = 5;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * companies.length)+1;
            n1 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n2 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            n3 = Math.random() * (max - min + 1 + 1) + min + 1;
            n4 = Math.random() * (max - min + 1) + min;
            n5 = Math.random() * (1 - min + 1) + min;
            System.out.printf(Locale.US, "INSERT INTO Carello_Measurement (CompanyID, MeasurementDate, LowerCarelloLocation, MiddleCarelloLocation, UpperCarelloLocation)\nVALUES (%d, '2020/%d/%d', %.2f, %.2f, %.2f);\n", i1, (int)n1, (int)n2, n3, n4, n5);
        }

        min = -1;
        max = 5;
        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * companies.length)+1;
            n1 = Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            n2 = Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            n3 = Math.random() * (max - min + 1 + 1) + min + 1;
            n4 = Math.random() * (max - min + 1) + min;
            n5 = Math.random() * (1 - min + 1) + min;
            System.out.printf(Locale.US, "INSERT INTO Door_Lock_Measurement (CompanyID, MeasurementDate, P203_DX, P205_DX, P206_DX)\nVALUES (%d, '2020/%d/%d', %.2f, %.2f, %.2f);\n", i1, (int)n1, (int)n2, n3, n4, n5);
        }

        for (int i = 0; i < nExamples; i++) {
            i1 = (int)(Math.random() * nExamples)+1;
            i2 = (int)(Math.random() * nExamples)+1;
            i3 = (int)(Math.random() * nExamples)+1;
            i4 = (int)(Math.random() * nExamples)+1;
            i5 = (int)(Math.random() * nExamples)+1;
            i6 = (int)(Math.random() * nExamples)+1;
            i7 = (int)(Math.random() * nExamples)+1;
            i8 = (int)(Math.random() * nExamples)+1;
            System.out.printf(Locale.US, "INSERT INTO Quality_Control (GeometricBodyMeasurementID, SteerMeasurementID, DrivingTestID, LiquidTestID, MontageMeasurementID, DoorLockID, CarelloID,RubberSiliconeID)\nVALUES (%d, %d, %d, %d, %d, %d, %d, %d);\n", i1, i2, i3, i4, i5, i6, i7, i8);
        }

        String[] years = {"2019","2018","2017","2020","2015"};
        String[] modelPrimitive = {"VX-","K-","XX-","TU-","WSX-","UUM-"};
        String[] colors = {"Seductive Cobalt","Empyral Maroon","Baby Saffron","Astral", "Brass","Spicy Coal","Dreary Velvet","Flamboyant Vanilla","Botanic Indigo","Volatile Moss","Brilliant Bronze"};
        for (int i = 0; i < nExamples; i++) {
            i2 = (int)Math.ceil(Math.random() * (11 - 1 + 1) + 1);
            i3 = (int)Math.ceil(Math.random() * (25 - 1 + 1) + 1);
            s1 = years[(int)(Math.random()* years.length)]+"/"+i2+"/"+i3;
            s2 = modelPrimitive[(int)(Math.random()* modelPrimitive.length)]+(int)(Math.random()*4045);
            s3 = colors[(int)(Math.random() * colors.length)];
            i1 = (int)(Math.random() * nExamples)+1;
            System.out.printf(Locale.US, "INSERT INTO Car ( ManufacturingDate, Model, Color, ControlID)\nVALUES ('%s', '%s', '%s', %d);\n",s1, s2, s3 ,i1);
        }

    }
}
