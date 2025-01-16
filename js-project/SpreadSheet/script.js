const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const spreadsheet = []
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

class Cell {
    constructor(isHeader, disabled, data, row, column, rowName, coulumName, active = false){
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.column = column;
        this.rowName = rowName;
        this.coulumName = coulumName;
        this.active = active;
    }
}

initSpreadSheet()

function initSpreadSheet() {
    for (let i = 0; i < ROWS; i++) {
        let spreadsheetRow = [];
        for (let j = 0; j < COLS; j++) {
            let cellData = "";
            let isHeader = false;
            let disabled = false;

            // 모든 row 첫 번째 칼럼에 숫자 넣기
            if (j === 0) {
                cellData = i;
                isHeader = true;
                disabled = true;
            }

            if (i === 0){
                isHeader = true;
                cellData = alphabet[j - 1];
                disabled = true;
            }

            // 모든 첫 번째 row의 컬럼은 ''
            if(!cellData){
                cellData = '';
            }

            const rowName = i;
            const columnName = alphabet[j -1];

            const cell = new Cell(isHeader, disabled, cellData, i, j, rowName, columnName, false);
            spreadsheetRow.push(cell);
        }
        spreadsheet.push(spreadsheetRow);
    }
    drawSheet();
    console.log(spreadsheet);
}

function createCellEl(cell){
    const cellEl = document.createElement('input');
    cellEl.className = 'cell';
    cellEl.id = 'cell_' + cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;

    if (cell.isHeader){
        cellEl.classList.add('header');
    }

    cellEl.onclick = () => handleCellClick(cell);

    return cellEl;
}

function handleCellClick(cell){
    const columnHeader = spreadsheet[0][cell.column];
    const rowHeader = spreadsheet[cell.row][0];

    const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
    const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
    columnHeaderEl.classList.add("active");
    rowHeaderEl.classList.add("active");

    console.log('clicked cell', columnHeaderEl, rowHeaderEl);
}

function getElFromRowCol(row, col){
    return document.querySelector("#cell_" + row + col);
}

function drawSheet() {
    for (let i = 0; i < spreadsheet.length; i++){
        const rowContainerEl = document.createElement('div');
        rowContainerEl.className = 'cell-row';

        for (let j =  0; j <spreadsheet[i].length; j++){
            const cell = spreadsheet[i][j];
            rowContainerEl.append(createCellEl(cell));
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}