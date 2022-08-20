import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import { Button, Pagination } from 'react-daisyui';
import { ChevronLeft, ChevronRight } from 'react-feather';

const initialState = {
    recordLength:10,
    pageSize:10,
    currentPage:1,
    canPreviousPage:false,
    canNextPage:false,
    pageOptions:[],
    lastPage:1,
    goToPageOption:{}
}
const setpageOption = (currentPage,lastPage)=>{
    if(lastPage<6) return Array(lastPage).fill('').map((_,i)=>i+1);
    else if(currentPage === 1) return [1,2,3,"...",lastPage]
    else if(currentPage+2 >= lastPage) return [1,'...',lastPage-2,lastPage-1,lastPage]
    else return [currentPage-1,currentPage,currentPage+1,'...',lastPage]
}
export default function MyPagination(props) {
    const [state, setState] = useState(initialState);
    const {currentPage,canPreviousPage,canNextPage,pageOptions,goToPageOption}=state;
    const {divClassName, handlePageChange, dropdownOption}=props
    useEffect(() => {
        let {totalRecords,pageSize,currentPage}=props;
        totalRecords=Number(totalRecords);
        const lastPage=pageSize?Math.ceil(totalRecords/pageSize):Math.ceil(totalRecords/10)??2;
        currentPage=currentPage?currentPage>lastPage?1:currentPage:1;
        
        setState({
                recordLength    :totalRecords??10,
                pageSize        :pageSize??10,
                currentPage     :currentPage??1,
                lastPage        :lastPage,
                canPreviousPage :currentPage===1?false:true,
                canNextPage     :currentPage===lastPage || !(lastPage>1)?false:true,
                pageOptions     : setpageOption(currentPage,lastPage),
                goToPageOption  :[...Array(lastPage).keys()].reduce((newObj,value)=>{return newObj.concat({label:value+1,value:value+1})},[])
        })
        
    }, [props])
    
    return (
        <div className={`flex flex-wrap ${divClassName} gap-x-3 items-center`}>
            <Pagination>
                <Button variant='link' key='previous' className={`${!canPreviousPage && 'text-opacity-30 cursor-not-allowed'}`} onClick={() => canPreviousPage && handlePageChange(currentPage-1)}>
                    <ChevronLeft />
                </Button>
                
                {pageOptions.map((item)=>
                    <Button variant='link' key={item} active={currentPage===item}  disabled={item==='...'} onClick={() => handlePageChange(item)} >
                        {item}
                    </Button>
                )}
                <Button variant='link' key='next' className={`${!canNextPage && 'text-opacity-30 cursor-not-allowed'}`} onClick={() => canNextPage && handlePageChange(currentPage+1)}>
                    <ChevronRight />
                </Button> 
            </Pagination>
            {dropdownOption && <Select isClearable={true} menuPlacement='top' options={goToPageOption} placeholder="Go to Page" onChange={(obj)=>obj && handlePageChange(obj.value)}/>}
        </div>
    )
    
}

