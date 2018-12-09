filetype plugin indent on
syntax on
"  For the package manager pathogen:
execute pathogen#infect()

nmap <F6> :NERDTreeToggle<CR>
set number
set relativenumber
imap jj <Esc>
if has("unix")
	let s:uname = system("uname")
	if s:uname == "Darwin\n"
		let g:livepreview_previewer = 'open -a Preview'
	endif
endif

		
