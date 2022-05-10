var i,j,c;
for (i=0; i<3; i++) {//externo
    for (j=0; j<4; j++) {//interno
        for(k=0;k<2;k++)
        document.write(i+" "+j+ " "+k+"<br>");
    }
}
/*
Saída:
i  j  k
0 0 0
0 0 1
0 1 0
0 1 1
0 2 0
0 2 1
0 3 0
0 3 1
1 0 0
1 0 1
1 1 0
1 1 1
1 2 0
1 2 1
1 3 0
1 3 1
2 0 0
2 0 1
2 1 0
2 1 1
2 2 0
2 2 1
2 3 0
2 3 1

*/