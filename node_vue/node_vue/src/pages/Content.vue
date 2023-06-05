<template>
    <v-app>
        <v-app-bar app color="blue" dark>
            <v-spacer></v-spacer>
            <v-app-bar-title>
                <div align="center" :style="{fontSize: 'xx-large'}">게시판 {{ $route.params.id }}</div>
            </v-app-bar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="1">
                        <v-btn color="cyan" @click="movetomain" :style="{height:'50px', width:'90px', fontWeight:'bold', fontSize:'large'}">홈으로</v-btn>
                    </v-col>
                    <v-col cols="12" md="10">
                        <v-card>
                            <div style="width: 300px; margin-left: 100px; padding-top: 20px;">글쓴이 : {{ writer }}</div>
                            <div style="width: 300px; margin-left: 100px; padding-top: 10px;">제목 : {{ title }}</div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>