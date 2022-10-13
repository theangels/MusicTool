<template>
  <el-container>
    <el-main style="padding: 0px; background-color: #f1f1f7">
      <el-row type="flex" justify="left" align="middle" style="margin: 20px">
        <el-col :span="24">
          <el-container>
            <el-main style="width: 100%; padding: 0px">
              <el-row>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="24">
                      <p style='font-size:24px'>八度</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-radio-group v-model="selectedOctave">
                        <el-radio-button v-for="octave in Object.keys(octaveDict)" :key="octave" :label="octave">
                        </el-radio-button>
                      </el-radio-group>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>时值</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-radio-group v-model="selectedEightNote">
                        <el-radio-button v-for="eighthNote in Object.keys(eighthNoteDict)" :key="eighthNote"
                          :label="eighthNote">
                        </el-radio-button>
                      </el-radio-group>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>附点</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-radio-group v-model="selectedDot">
                        <el-radio-button v-for="dot in Object.keys(dotDict)" :key="dot" :label="dot">
                        </el-radio-button>
                      </el-radio-group>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>连音</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-radio-group v-model="selectedTie">
                        <el-radio-button v-for="tie in Object.keys(tieDict)" :key="tie" :label="tie">
                        </el-radio-button>
                      </el-radio-group>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>其他</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-checkbox-group v-model="selectedOther">
                        <el-checkbox-button v-for="other in Object.keys(otherDict)" :key="other" :label="other">
                        </el-checkbox-button>
                      </el-checkbox-group>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>音阶</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-button v-for="scale in scaleArray" :key="scale" @click="addNote(scale)">{{scale}}</el-button>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <p style='font-size:24px'>操作</p>
                    </el-col>
                    <el-col :span="24" style='margin-top:20px'>
                      <el-button @click="addSection()">分节</el-button>
                      <el-button @click="addLine()">换行</el-button>
                      <el-button @click="revoke()">回退</el-button>
                      <el-button @click="reset()">清空</el-button>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12">
                  <p style='line-height:32px;font-size:16px'><span v-for="note in musicNotation" :key="note.id">
                      <br v-if="note.note == '\n'">
                      <span v-else-if="note.note == '|'" style='user-select:none;'>&emsp;|&emsp;</span>
                      <span v-else>&nbsp;'{{note.note}}',&nbsp;</span>
                    </span></p>
                </el-col>
              </el-row>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    data() {
      return {
        octaveDict: {
          '低 24': '---',
          '低 16': '--',
          '低 8': '-',
          '正常': '',
          '高 8': '+',
          '高 16': '++',
          '高 24': '+++'
        },
        selectedOctave: '正常',

        scaleArray: [
          '0', '1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'
        ],

        eighthNoteDict: {
          '三十二分音符': '___',
          '十六分音符': '__',
          '八分音符': '_',
          '四分音符': '',
          '二分音符': '.',
          '附点二分音符': '..',
          '全音符': '...'
        },
        selectedEightNote: '四分音符',

        dotDict: {
          '无': '',
          '一个': '*',
          '两个': '**'
        },
        selectedDot: '无',

        tieDict: {
          '无': '',
          '连音起点': '(',
          '连音终点': ')'
        },
        selectedTie: '无',

        otherDict: {
          '上波音': '~',
        },
        selectedOther: [],

        musicNotation: [{
          'id': new Date().getTime(),
          note: '|'
        }],

        isSemitone: false,
      };
    },
    watch: {},
    mounted() {
      var _this = this

      document.onkeyup = function (e) {
        _this.isSemitone = false
      }

      document.onkeydown = function (e) {
        var key = window.event.keyCode

        switch (key) {
          case 49:
            _this.selectedOctave = '低 24'
            break;
          case 50:
            _this.selectedOctave = '低 16'
            break;
          case 51:
            _this.selectedOctave = '低 8'
            break;
          case 52:
            _this.selectedOctave = '正常'
            break;
          case 53:
            _this.selectedOctave = '高 8'
            break;
          case 54:
            _this.selectedOctave = '高 16'
            break;
          case 55:
            _this.selectedOctave = '高 24'
            break;

          case 81:
            _this.selectedEightNote = '三十二分音符'
            break;
          case 87:
            _this.selectedEightNote = '十六分音符'
            break;
          case 69:
            _this.selectedEightNote = '八分音符'
            break;
          case 82:
            _this.selectedEightNote = '四分音符'
            break;
          case 84:
            _this.selectedEightNote = '二分音符'
            break;
          case 89:
            _this.selectedEightNote = '附点二分音符'
            break;
          case 85:
            _this.selectedEightNote = '全音符'
            break;

          case 65:
            _this.selectedDot = '无'
            break;
          case 83:
            _this.selectedDot = '一个'
            break;
          case 68:
            _this.selectedDot = '两个'
            break;

          case 32:
            _this.addSection()
            break;
          case 13:
            _this.addLine()
            break;
          case 8:
            _this.revoke()
            break;
          case 46:
            _this.reset()
            break;

          case 20:
            _this.isSemitone = true
            break;

          case 96:
            _this.addNote('0')
            break;
          case 97:
            _this.addNote('1')
            break;
          case 98:
            if (_this.isSemitone) {
              _this.addNote('b2')
            } else {
              _this.addNote('2')
            }
            break;
          case 99:
            if (_this.isSemitone) {
              _this.addNote('b3')
            } else {
              _this.addNote('3')
            }
            break;
          case 100:
            _this.addNote('4')
            break;
          case 101:
            if (_this.isSemitone) {
              _this.addNote('b5')
            } else {
              _this.addNote('5')
            }
            break;
          case 102:
            if (_this.isSemitone) {
              _this.addNote('b6')
            } else {
              _this.addNote('6')
            }
            break;
          case 103:
            if (_this.isSemitone) {
              _this.addNote('b7')
            } else {
              _this.addNote('7')
            }
            break;

          case 90:
            _this.selectedTie = '无'
            break
          case 88:
            _this.selectedTie = '连音起点'
            break
          case 67:
            _this.selectedTie = '连音终点'
            break
        }
      }
    },
    beforeDestroy() {

    },
    methods: {
      goto(routerName, query = {}) {
        this.$router.push({
          path: routerName,
          query: query,
        });
        return;
      },
      addNote(note) {
        var _this = this

        var fullNote = _this.octaveDict[_this.selectedOctave] + note + _this.eighthNoteDict[_this.selectedEightNote] +
          _this
          .dotDict[_this.selectedDot] + _this
          .tieDict[_this.selectedTie]

        if (_this.selectedOther.length > 0) {
          _this.selectedOther.forEach(function (element) {
            fullNote += _this.otherDict[element]
          })
        }

        _this.musicNotation.push({
          'id': new Date().getTime(),
          'note': fullNote
        })
      },
      addSection() {
        var _this = this

        _this.musicNotation.push({
          'id': new Date().getTime(),
          note: '|'
        })
      },
      addLine() {
        var _this = this

        _this.musicNotation.push({
          'id': new Date().getTime(),
          note: '\n'
        })
      },
      revoke() {
        var _this = this

        _this.musicNotation.pop()
      },
      reset() {
        var _this = this

        _this.musicNotation = [{
          'id': new Date().getTime(),
          note: '|'
        }]
      }
    },
  };

</script>
