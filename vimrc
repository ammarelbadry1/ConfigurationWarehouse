" Color scheme
syntax on
set background=dark
colorscheme slate

" Vim commands configuration
set showcmd
set wildmenu

" Mouse Movement
set mouse=a

" Cursor related
set scrolloff=5
au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif

" Indentation
filetype plugin indent on
set tabstop=2
set shiftwidth=2
set expandtab
